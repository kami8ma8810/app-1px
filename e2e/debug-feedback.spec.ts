import { test, expect } from '@playwright/test'

test('フィードバック表示のデバッグ', async ({ page }) => {
  // コンソールログを表示
  page.on('console', msg => {
    if (msg.type() === 'log') {
      console.log('Browser console:', msg.text())
    }
  })
  
  // エラーを表示
  page.on('pageerror', err => {
    console.error('Page error:', err)
  })
  
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  
  // スタートボタンをクリック
  await page.click('button:has-text("GAME START")')
  await page.waitForURL('/game')
  
  // ゲーム画面が表示されるまで待つ
  await page.waitForSelector('iframe', { timeout: 5000 })
  
  // ProblemDisplayコンポーネントを確認
  const problemDisplay = page.locator('.relative.w-full')
  await expect(problemDisplay).toBeVisible()
  
  // iframe内の要素を確認
  const iframe = page.locator('iframe')
  const iframeBox = await iframe.boundingBox()
  console.log('iframeの位置:', iframeBox)
  
  // クリック前の状態を確認
  console.log('クリック前のHTML:', await page.locator('body').evaluate(el => el.innerHTML.substring(0, 500)))
  
  // iframe内をクリック（座標を調整）
  if (iframeBox) {
    // iframe内の任意の位置をクリック
    const clickX = iframeBox.x + 100
    const clickY = iframeBox.y + 100
    console.log(`クリック位置: (${clickX}, ${clickY})`)
    
    await page.mouse.click(clickX, clickY)
  }
  
  // クリック直後にスクリーンショットを撮る
  await page.screenshot({ path: 'debug-feedback-immediate.png' })
  
  // クリック直後にフィードバックを確認（待機なし）
  await page.waitForTimeout(10)
  
  // フィードバック要素を探す
  const feedbackSelectors = [
    '.fixed.top-4',
    '[class*="feedback"]',
    'text=/正解|不正解/',
    '.bg-gradient-to-r',
    '.from-emerald-500',
    '.from-red-500',
    '[class*="animate-"]',
    '.absolute.top-1\\/2.left-1\\/2',
    '.px-16.py-8',
    'div:has-text("正解")',
    'div:has-text("不正解")'
  ]
  
  for (const selector of feedbackSelectors) {
    const count = await page.locator(selector).count()
    console.log(`セレクター "${selector}" の要素数: ${count}`)
  }
  
  // クリック後のHTML全体を確認
  const bodyHTML = await page.locator('body').innerHTML()
  console.log('クリック後のHTML:', bodyHTML.substring(0, 1000))
  
  // ProblemDisplay内のHTMLを確認
  const problemDisplayHTML = await page.locator('.relative.w-full').innerHTML()
  console.log('ProblemDisplay内のHTML:', problemDisplayHTML)
  
  // スクリーンショットを撮る
  await page.screenshot({ path: 'debug-feedback.png' })
})