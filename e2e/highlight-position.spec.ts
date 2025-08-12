import { test, expect } from '@playwright/test'

test.describe('ハイライト位置の確認', () => {
  test('正解時にハイライトが正しい位置に表示される', async ({ page }) => {
    // アプリケーションを開く
    await page.goto('http://localhost:5174/')
    
    // スタートボタンをクリック
    await page.click('button:has-text("GAME START")')
    
    // ゲーム画面が表示されるまで待機
    await page.waitForSelector('text=/1px違う箇所をクリックまたはタップしてください/')
    
    // 最初の問題の情報を取得
    const problemTitle = await page.textContent('h2')
    console.log('問題タイトル:', problemTitle)
    
    // iframe要素を取得
    const iframe = await page.locator('iframe').elementHandle()
    if (!iframe) {
      throw new Error('iframe not found')
    }
    
    // iframeの位置を取得
    const iframeBox = await iframe.boundingBox()
    console.log('iframe位置:', iframeBox)
    
    // デバッグ: 問題の種類に応じて適切な位置をクリック
    // ここでは仮の座標を使用（実際の問題に応じて調整が必要）
    const clickX = iframeBox!.x + 300
    const clickY = iframeBox!.y + 100
    
    // クリック前のスクリーンショット
    await page.screenshot({ path: 'before-click.png' })
    
    // クリック
    await page.mouse.click(clickX, clickY)
    
    // フィードバックが表示されるまで待機
    await page.waitForSelector('text=/正解！|不正解/', { timeout: 5000 })
    
    // クリック後のスクリーンショット
    await page.screenshot({ path: 'after-click.png' })
    
    // 正解した場合、ハイライトが表示されることを確認
    const feedbackText = await page.textContent('.fixed.inset-0')
    if (feedbackText?.includes('正解！')) {
      // ハイライト要素が存在することを確認
      const highlight = await page.locator('.border-emerald-500').elementHandle()
      expect(highlight).toBeTruthy()
      
      // ハイライトの位置を取得
      if (highlight) {
        const highlightBox = await highlight.boundingBox()
        console.log('ハイライト位置:', highlightBox)
        
        // ハイライトがiframe内に収まっているか確認
        if (highlightBox && iframeBox) {
          expect(highlightBox.x).toBeGreaterThanOrEqual(iframeBox.x)
          expect(highlightBox.y).toBeGreaterThanOrEqual(iframeBox.y)
          expect(highlightBox.x + highlightBox.width).toBeLessThanOrEqual(iframeBox.x + iframeBox.width)
          expect(highlightBox.y + highlightBox.height).toBeLessThanOrEqual(iframeBox.y + iframeBox.height)
        }
      }
    }
  })
  
  test('複数の問題でハイライト位置を確認', async ({ page }) => {
    await page.goto('http://localhost:5174/')
    await page.click('button:has-text("ゲームを始める")')
    
    for (let i = 0; i < 3; i++) {
      // ゲーム画面が表示されるまで待機
      await page.waitForSelector('text=/1px違う箇所をクリックまたはタップしてください/')
      
      // iframe要素を取得
      const iframe = await page.locator('iframe').elementHandle()
      if (!iframe) continue
      
      const iframeBox = await iframe.boundingBox()
      if (!iframeBox) continue
      
      // ランダムな位置をクリック（テスト用）
      const positions = [
        { x: 100, y: 100 },  // 左上
        { x: 400, y: 100 },  // 右上
        { x: 250, y: 200 },  // 中央
      ]
      
      const pos = positions[i % positions.length]
      await page.mouse.click(iframeBox.x + pos.x, iframeBox.y + pos.y)
      
      // フィードバック待機
      await page.waitForSelector('text=/正解！|不正解/')
      
      // スクリーンショット保存
      await page.screenshot({ path: `problem-${i + 1}.png` })
      
      // 次の問題へ
      const nextButton = await page.locator('button:has-text("次の問題へ")')
      if (await nextButton.isVisible()) {
        await nextButton.click()
      }
    }
  })
})