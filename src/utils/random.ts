import type { Problem } from '../types'
import { problems } from '../data/problems'

export function getRandomProblems(): Problem[] {
  console.log('全問題数:', problems.length)
  // 全問題からランダムに10問選択
  const shuffledProblems = shuffleArray([...problems])
  const selected = shuffledProblems.slice(0, 10)
  console.log('選択された問題:', selected.map(p => p.id))
  return selected
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  // Fisher-Yatesアルゴリズムでシャッフル
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}