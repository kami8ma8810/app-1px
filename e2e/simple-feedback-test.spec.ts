import { test, expect } from '@playwright/test'

test('シンプルなフィードバックテスト', async ({ page }) => {
  await page.goto('/')
  
  // ゲームを開始
  await page.click('button:has-text("GAME START")')
  await page.waitForURL('/game')
  
  // iframeが表示されるまで待つ
  await page.waitForSelector('iframe')
  
  // クリックしてフィードバックを待つ
  await page.mouse.click(200, 300)
  
  // フィードバックが表示されるかチェック（正解または不正解のテキスト）
  const feedbackVisible = await page.getByText(/正解！|不正解/).isVisible({ timeout: 1000 }).catch(() => false)
  
  console.log('フィードバックが表示されているか:', feedbackVisible)
  
  // body全体でフィードバック要素を探す
  const bodyHtml = await page.locator('body').innerHTML()
  const hasCorrectText = bodyHtml.includes('正解！')
  const hasIncorrectText = bodyHtml.includes('不正解')
  
  console.log('HTMLに「正解！」が含まれているか:', hasCorrectText)
  console.log('HTMLに「不正解」が含まれているか:', hasIncorrectText)
  
  // 最低限、どちらかのテキストが表示されることを確認
  expect(hasCorrectText || hasIncorrectText).toBe(true)
})