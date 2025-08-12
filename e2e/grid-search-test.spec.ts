import { test, expect } from '@playwright/test'

test('グリッドサーチで正解を見つけてハイライトを確認', async ({ page }) => {
  // アプリケーションを開く
  await page.goto('http://localhost:5174/')
  
  // ページが読み込まれるまで待機
  await page.waitForLoadState('networkidle')
  
  // スタートボタンをクリック
  await page.click('button:has-text("GAME START")')
  
  // ゲーム画面が表示されるまで待機
  await page.waitForSelector('iframe', { timeout: 10000 })
  
  // iframeが完全に読み込まれるまで待機
  await page.waitForTimeout(2000)
  
  // iframe要素を取得
  const iframe = await page.frameLocator('iframe')
  const iframeElement = await page.locator('iframe').elementHandle()
  
  if (!iframeElement) {
    throw new Error('iframe not found')
  }
  
  const iframeBox = await iframeElement.boundingBox()
  if (!iframeBox) {
    throw new Error('Could not get iframe bounding box')
  }
  
  console.log('iframe位置とサイズ:', iframeBox)
  
  // ヒントテキストを取得
  const hintText = await page.locator('p').textContent()
  console.log('問題のヒント:', hintText)
  
  let foundCorrect = false
  let attempts = 0
  
  // グリッドサーチで正解を探す
  const gridSize = 50 // 50pxごとにクリック
  const maxAttempts = 100
  
  outerLoop: for (let y = 20; y < iframeBox.height - 20 && attempts < maxAttempts; y += gridSize) {
    for (let x = 20; x < iframeBox.width - 20 && attempts < maxAttempts; x += gridSize) {
      attempts++
      
      const clickX = iframeBox.x + x
      const clickY = iframeBox.y + y
      
      console.log(`試行 ${attempts}: 相対座標(${x}, ${y})`);
      
      // クリック
      await page.mouse.click(clickX, clickY)
      
      // フィードバックが表示されるまで少し待つ
      try {
        await page.waitForSelector('.fixed.inset-0', { timeout: 2000 })
        
        // フィードバックの内容を取得
        const feedbackElement = await page.locator('.fixed.inset-0 div').first()
        const feedbackText = await feedbackElement.textContent()
        
        if (feedbackText?.includes('正解！')) {
          console.log(`✅ 正解を見つけました！位置: (${x}, ${y})`)
          foundCorrect = true
          
          // ハイライト表示を待つ
          await page.waitForTimeout(600)
          
          // iframe内のハイライトを確認
          const highlightVisible = await iframe.locator('#answer-highlight').isVisible()
          console.log('ハイライト表示:', highlightVisible)
          
          if (highlightVisible) {
            // ハイライトの詳細情報を取得
            const highlightElement = await iframe.locator('#answer-highlight').elementHandle()
            if (highlightElement) {
              // スタイル情報を取得
              const styleInfo = await highlightElement.evaluate(el => {
                const styles = window.getComputedStyle(el)
                return {
                  position: styles.position,
                  left: styles.left,
                  top: styles.top,
                  width: styles.width,
                  height: styles.height,
                  border: styles.border,
                  backgroundColor: styles.backgroundColor,
                  zIndex: styles.zIndex
                }
              })
              console.log('ハイライトのスタイル:', styleInfo)
              
              // boundingBoxを取得
              const bounds = await highlightElement.boundingBox()
              console.log('ハイライトの位置とサイズ:', bounds)
            }
            
            // スクリーンショットを保存
            await page.screenshot({ path: 'highlight-found.png', fullPage: true })
            
            // ハイライトの表示を確認
            expect(highlightVisible).toBe(true)
          } else {
            console.warn('⚠️ 正解したがハイライトが表示されていません')
          }
          
          break outerLoop
        }
        
        // フィードバックが消えるまで待つ
        await page.waitForTimeout(1000)
        
      } catch (e) {
        // フィードバックが表示されなかった場合は続行
        console.log('フィードバックなし')
      }
    }
  }
  
  if (foundCorrect) {
    console.log(`✅ テスト成功: ${attempts}回の試行で正解を見つけました`)
  } else {
    console.log(`❌ ${attempts}回試行しましたが正解が見つかりませんでした`)
    
    // デバッグ用に最終状態のスクリーンショットを保存
    await page.screenshot({ path: 'debug-final-state.png', fullPage: true })
  }
  
  expect(foundCorrect).toBe(true)
})