import { test, expect } from '@playwright/test'

test('シンプルなハイライトテスト', async ({ page }) => {
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
  
  // iframeの位置を取得
  const iframeBox = await iframeElement.boundingBox()
  console.log('iframe位置:', iframeBox)
  
  // 問題のヒントを取得
  const hint = await page.textContent('p')
  console.log('ヒント:', hint)
  
  // スクリーンショットを撮影
  await page.screenshot({ path: 'test-screenshot.png', fullPage: true })
  
  // 仮の座標でクリック（実際の問題によって調整が必要）
  if (iframeBox) {
    const clickX = iframeBox.x + 400
    const clickY = iframeBox.y + 100
    console.log('クリック座標:', { x: clickX, y: clickY })
    
    await page.mouse.click(clickX, clickY)
    
    // フィードバックが表示されるまで待機
    await page.waitForSelector('.fixed.inset-0', { timeout: 5000 })
    
    // フィードバックの内容を取得
    const feedbackElement = await page.locator('.fixed.inset-0 div').first()
    const feedbackText = await feedbackElement.textContent()
    console.log('フィードバック:', feedbackText)
    
    // 正解した場合
    if (feedbackText?.includes('正解！')) {
      // iframe内のハイライト要素を待機
      await page.waitForTimeout(500) // ハイライト表示のための遅延
      
      // ハイライトのスクリーンショット
      await page.screenshot({ path: 'highlight-screenshot.png', fullPage: true })
      
      // iframe内のハイライトを確認
      const hasHighlight = await iframe.locator('#answer-highlight').isVisible()
      console.log('正解！ハイライトが表示されました:', hasHighlight)
      
      // ハイライトの位置情報を取得
      const highlightBounds = await iframe.locator('#answer-highlight').boundingBox()
      console.log('ハイライト位置:', highlightBounds)
    } else {
      console.log('不正解でした')
    }
  }
})