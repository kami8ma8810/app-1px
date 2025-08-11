import { test, expect } from '@playwright/test'

test.describe('フィードバック表示のテスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    
    // ページが読み込まれるまで待つ
    await page.waitForLoadState('networkidle')
    
    // ゲームを開始
    const startButton = page.locator('button', { hasText: 'ゲームを始める' })
    await startButton.waitFor({ state: 'visible' })
    await startButton.click()
    await page.waitForURL('/game')
  })

  test('問題をクリックした時に正解・不正解のフィードバックが表示される', async ({ page }) => {
    // iframeが表示されるまで待つ
    await page.waitForSelector('iframe')
    
    // ProblemDisplayコンポーネントのデバッグ情報を取得
    const problemDisplayExists = await page.locator('.relative.w-full').count()
    console.log('ProblemDisplay要素の数:', problemDisplayExists)
    
    // iframe要素の情報を取得
    const iframe = page.frameLocator('iframe').first()
    
    // iframe内をクリック（不正解の位置）
    await page.mouse.click(100, 300)
    
    // フィードバックが表示されるまで待つ（最大5秒）
    const feedbackVisible = await page.locator('text=/正解|不正解/').isVisible({ timeout: 5000 }).catch(() => false)
    
    if (!feedbackVisible) {
      // フィードバック要素を探す
      const feedbackElements = await page.locator('.fixed.top-4.left-1\\/2').count()
      console.log('フィードバック要素の数:', feedbackElements)
      
      // 全体のHTMLを出力してデバッグ
      const bodyHTML = await page.locator('body').innerHTML()
      console.log('ページのHTML:', bodyHTML.substring(0, 1000))
    }
    
    // フィードバックが表示されることを確認
    await expect(page.locator('text=/正解|不正解/')).toBeVisible({ timeout: 5000 })
  })

  test('正解エリアをクリックした時に「正解！」が表示される', async ({ page }) => {
    // 問題データを取得するためにコンソールログを監視
    page.on('console', msg => {
      console.log('Console:', msg.text())
    })
    
    // デバッグ用: 現在の問題の答えエリアを取得
    const answerArea = await page.evaluate(() => {
      const gameStore = (window as any).__PINIA__?.state?.value?.game
      return gameStore?.currentProblem?.answerArea
    })
    console.log('答えエリア:', answerArea)
    
    if (answerArea) {
      // 正解エリアの中心をクリック
      const centerX = answerArea.x + answerArea.width / 2
      const centerY = answerArea.y + answerArea.height / 2
      
      // iframe内の座標をページ座標に変換
      const iframeBox = await page.locator('iframe').boundingBox()
      if (iframeBox) {
        await page.mouse.click(iframeBox.x + centerX, iframeBox.y + centerY)
      }
    }
    
    // 「正解！」が表示されることを確認
    await expect(page.locator('text=正解！')).toBeVisible({ timeout: 5000 })
  })

  test('不正解エリアをクリックした時に「不正解」が表示される', async ({ page }) => {
    // 明らかに間違った位置をクリック
    await page.mouse.click(50, 250)
    
    // 「不正解」が表示されることを確認
    await expect(page.locator('text=不正解').first()).toBeVisible({ timeout: 5000 })
  })
})