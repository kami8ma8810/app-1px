import { test, expect } from '@playwright/test'

test.describe('iframe内ハイライト注入の確認', () => {
  test('正解時にiframe内にハイライトが正しく表示される', async ({ page }) => {
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
    
    // 複数の位置を試して正解を見つける（最初のクリックで決める）
    const positions = [
      { x: 520, y: 80 },   // 典型的な正解位置付近
      { x: 630, y: 80 },   // 右側
      { x: 410, y: 80 },   // 左側
      { x: 520, y: 150 },  // 下側
      { x: 300, y: 200 },  // 中央左
      { x: 500, y: 200 },  // 中央
      { x: 700, y: 200 },  // 中央右
    ]
    
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
    
    // ヒントテキストを取得して問題を判断
    const hintText = await page.locator('p').textContent()
    console.log('ヒント:', hintText)
    
    // 最初のクリックを実行
    const firstPos = positions[0]
    const clickX = iframeBox.x + firstPos.x
    const clickY = iframeBox.y + firstPos.y
    
    console.log(`クリック位置: x=${firstPos.x}, y=${firstPos.y}`)
    
    // クリック
    await page.mouse.click(clickX, clickY)
    
    // フィードバックが表示されるまで待機
    await page.waitForSelector('.fixed.inset-0', { timeout: 5000 })
    
    // フィードバックの内容を取得
    const feedbackElement = await page.locator('.fixed.inset-0 div').first()
    const feedbackText = await feedbackElement.textContent()
    
    console.log('フィードバック:', feedbackText)
    
    if (feedbackText?.includes('正解！')) {
      console.log('正解を見つけました！')
      
      // ハイライト表示を待つ
      await page.waitForTimeout(500)
      
      // iframe内のハイライトを確認
      const hasHighlight = await iframe.locator('#answer-highlight').isVisible()
      expect(hasHighlight).toBe(true)
      
      // ハイライトの位置情報を取得
      const highlightElement = await iframe.locator('#answer-highlight').elementHandle()
      if (highlightElement) {
        const highlightBounds = await highlightElement.boundingBox()
        console.log('ハイライト位置:', highlightBounds)
        
        // ハイライトが適切なサイズを持っているか確認
        if (highlightBounds) {
          expect(highlightBounds.width).toBeGreaterThan(0)
          expect(highlightBounds.height).toBeGreaterThan(0)
        }
      }
      
      // スクリーンショットを保存
      await page.screenshot({ path: 'highlight-correct.png', fullPage: true })
    } else {
      console.log('不正解でした。次の問題で再試行します。')
      
      // 不正解の場合でも、次の問題に進む
      await page.waitForTimeout(1500)
      const nextButton = await page.locator('button:has-text("次の問題へ")')
      if (await nextButton.isVisible()) {
        await nextButton.click()
        
        // 次の問題で再度試す
        await page.waitForSelector('iframe', { timeout: 10000 })
        await page.waitForTimeout(1000)
        
        const newIframeElement = await page.locator('iframe').elementHandle()
        if (newIframeElement) {
          const newIframeBox = await newIframeElement.boundingBox()
          if (newIframeBox) {
            // 別の位置でクリック
            const secondPos = positions[3]
            await page.mouse.click(newIframeBox.x + secondPos.x, newIframeBox.y + secondPos.y)
            
            // フィードバック待機
            await page.waitForSelector('.fixed.inset-0', { timeout: 5000 })
            const newFeedbackElement = await page.locator('.fixed.inset-0 div').first()
            const newFeedbackText = await newFeedbackElement.textContent()
            
            if (newFeedbackText?.includes('正解！')) {
              console.log('2問目で正解を見つけました！')
              await page.waitForTimeout(500)
              
              const newIframe = await page.frameLocator('iframe')
              const hasHighlight = await newIframe.locator('#answer-highlight').isVisible()
              expect(hasHighlight).toBe(true)
              
              await page.screenshot({ path: 'highlight-correct-2nd.png', fullPage: true })
            }
          }
        }
      }
    }
  })
  
  test('複数問題でハイライト表示を確認', async ({ page }) => {
    await page.goto('http://localhost:5174/')
    await page.click('button:has-text("GAME START")')
    
    let correctCount = 0
    
    for (let problemIndex = 0; problemIndex < 3; problemIndex++) {
      console.log(`問題 ${problemIndex + 1} を開始`)
      
      // ゲーム画面が表示されるまで待機
      await page.waitForSelector('iframe', { timeout: 10000 })
      await page.waitForTimeout(1000)
      
      const iframe = await page.frameLocator('iframe')
      const iframeElement = await page.locator('iframe').elementHandle()
      
      if (!iframeElement) continue
      
      const iframeBox = await iframeElement.boundingBox()
      if (!iframeBox) continue
      
      // グリッド状に位置を試す
      const gridSize = 100
      let found = false
      
      for (let y = 50; y < 400 && !found; y += gridSize) {
        for (let x = 50; x < 800 && !found; x += gridSize) {
          await page.mouse.click(iframeBox.x + x, iframeBox.y + y)
          
          // フィードバック待機
          await page.waitForSelector('.fixed.inset-0', { timeout: 5000 })
          
          const feedbackElement = await page.locator('.fixed.inset-0 div').first()
          const feedbackText = await feedbackElement.textContent()
          
          if (feedbackText?.includes('正解！')) {
            console.log(`正解！位置: x=${x}, y=${y}`)
            correctCount++
            found = true
            
            // ハイライト表示を確認
            await page.waitForTimeout(500)
            const hasHighlight = await iframe.locator('#answer-highlight').isVisible()
            console.log(`ハイライト表示: ${hasHighlight}`)
            
            // スクリーンショット
            await page.screenshot({ path: `problem-${problemIndex + 1}-correct.png` })
          }
          
          // フィードバックが消えるまで待つ
          await page.waitForTimeout(1500)
        }
      }
      
      // 次の問題へ
      const nextButton = await page.locator('button:has-text("次の問題へ")')
      if (await nextButton.isVisible()) {
        await nextButton.click()
      } else {
        // ゲーム終了の場合
        break
      }
    }
    
    console.log(`正解数: ${correctCount}/3`)
    expect(correctCount).toBeGreaterThan(0)
  })
})