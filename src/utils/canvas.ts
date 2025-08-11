export async function generateTitleImage(
  title: string,
  correctCount: number,
  totalCount: number
): Promise<string> {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas context not available')

  // OGP標準サイズ
  canvas.width = 1200
  canvas.height = 630

  // 背景グラデーション
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  
  if (correctCount === 10) {
    // ゴールド
    gradient.addColorStop(0, '#FFC107')
    gradient.addColorStop(0.5, '#FFB300')
    gradient.addColorStop(1, '#FF6F00')
  } else if (correctCount >= 8) {
    // シルバー
    gradient.addColorStop(0, '#E0E0E0')
    gradient.addColorStop(0.5, '#BDBDBD')
    gradient.addColorStop(1, '#9E9E9E')
  } else if (correctCount >= 6) {
    // ブロンズ
    gradient.addColorStop(0, '#D97D34')
    gradient.addColorStop(0.5, '#C66D2E')
    gradient.addColorStop(1, '#B35D28')
  } else if (correctCount >= 4) {
    // ブルー
    gradient.addColorStop(0, '#2196F3')
    gradient.addColorStop(0.5, '#1E88E5')
    gradient.addColorStop(1, '#1976D2')
  } else if (correctCount >= 2) {
    // エメラルド
    gradient.addColorStop(0, '#10B981')
    gradient.addColorStop(0.5, '#059669')
    gradient.addColorStop(1, '#047857')
  } else {
    // グレー
    gradient.addColorStop(0, '#9CA3AF')
    gradient.addColorStop(0.5, '#6B7280')
    gradient.addColorStop(1, '#4B5563')
  }
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // テキストスタイル設定
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // 称号
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 80px sans-serif'
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
  ctx.shadowBlur = 10
  ctx.shadowOffsetX = 5
  ctx.shadowOffsetY = 5
  ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 100)
  
  // スコア
  ctx.font = 'bold 60px sans-serif'
  ctx.fillText(`${correctCount} / ${totalCount}`, canvas.width / 2, canvas.height / 2 + 20)
  
  // アプリ名
  ctx.font = '40px sans-serif'
  ctx.fillText('One Pixel', canvas.width / 2, canvas.height / 2 + 150)
  
  // 日付
  ctx.font = '30px sans-serif'
  const date = new Date().toLocaleDateString('ja-JP')
  ctx.fillText(date, canvas.width / 2, canvas.height / 2 + 220)
  
  return canvas.toDataURL('image/png')
}

export function downloadImage(dataUrl: string, filename: string = 'one-pixel-result.png') {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}