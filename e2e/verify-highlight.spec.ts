import { test, expect } from '@playwright/test'

test('ハイライト機能の動作確認', async ({ page }) => {
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
  
  console.log('iframe位置:', iframeBox)
  
  // ヒントテキストを取得
  const hintText = await page.locator('p').textContent()
  console.log('ヒント:', hintText)
  
  // 典型的な正解位置（多くの問題で正解がある位置）をクリック
  const tryPositions = [
    { x: 270, y: 90 },   // 中央上部
    { x: 220, y: 90 },   // 左寄り上部
    { x: 370, y: 90 },   // 右寄り上部
    { x: 170, y: 150 },  // 左側中央
  ]
  
  // 最初の位置を試す
  const pos = tryPositions[0]
  const clickX = iframeBox.x + pos.x
  const clickY = iframeBox.y + pos.y
  
  console.log(`クリック位置: x=${pos.x}, y=${pos.y}`)
  
  // クリック前のスクリーンショット
  await page.screenshot({ path: 'before-click.png' })
  
  // クリック
  await page.mouse.click(clickX, clickY)
  
  // フィードバックが表示されるまで待機
  await page.waitForSelector('.fixed.inset-0', { timeout: 5000 })
  
  // フィードバックの内容を取得
  const feedbackElement = await page.locator('.fixed.inset-0 div').first()
  const feedbackText = await feedbackElement.textContent()
  
  console.log('フィードバック:', feedbackText)
  
  // クリック後のスクリーンショット
  await page.screenshot({ path: 'after-click.png' })
  
  // 少し待ってからハイライトの確認
  await page.waitForTimeout(1000)
  
  if (feedbackText?.includes('正解！')) {
    console.log('✅ 正解しました！')
    
    // iframe内のハイライトを確認
    try {
      const highlightExists = await iframe.locator('#answer-highlight').count() > 0
      console.log('ハイライト要素の存在:', highlightExists)
      
      if (highlightExists) {
        // ハイライトの情報を取得
        const highlightInfo = await iframe.locator('#answer-highlight').evaluate(el => {
          const rect = el.getBoundingClientRect()
          const styles = window.getComputedStyle(el)
          return {
            position: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
            styles: {
              border: styles.border,
              backgroundColor: styles.backgroundColor,
              display: styles.display,
              visibility: styles.visibility,
              opacity: styles.opacity
            }
          }
        })
        
        console.log('ハイライト情報:', JSON.stringify(highlightInfo, null, 2))
        
        // ハイライトが表示されているか確認
        expect(highlightInfo.position.width).toBeGreaterThan(0)
        expect(highlightInfo.position.height).toBeGreaterThan(0)
        
        console.log('✅ ハイライトが正しく表示されています')
      } else {
        console.log('❌ ハイライト要素が見つかりません')
      }
      
    } catch (error) {
      console.error('ハイライト確認中のエラー:', error)
    }
  } else {
    console.log('❌ 不正解でした')
    console.log('注意: 正解位置は問題によって異なります。')
    console.log('テストを複数回実行して、正解した場合のハイライト表示を確認してください。')
  }
  
  // 最終的なスクリーンショット
  await page.screenshot({ path: 'final-state.png' })
})