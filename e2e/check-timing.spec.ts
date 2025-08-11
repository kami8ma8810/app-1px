import { test } from '@playwright/test'

test('フィードバックのタイミングを確認', async ({ page }) => {
  // コンソールログをすべて表示
  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`)
  })
  
  await page.goto('/')
  await page.click('button:has-text("GAME START")')
  await page.waitForURL('/game')
  await page.waitForSelector('iframe')
  
  // クリック
  console.log('=== クリック実行 ===')
  await page.mouse.click(200, 300)
  
  // 複数回チェック
  for (let i = 0; i < 10; i++) {
    await page.waitForTimeout(50)
    const hasCorrect = await page.locator('text=正解！').count()
    const hasIncorrect = await page.locator('text=不正解').count()
    console.log(`${i * 50}ms後: 正解=${hasCorrect}, 不正解=${hasIncorrect}`)
  }
})