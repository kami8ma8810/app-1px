import type { Problem } from '../types'
import { problems } from '../data/problems'
import { PROBLEM_CATEGORIES } from '../constants/game'

export function getRandomProblems(): Problem[] {
  const categories = PROBLEM_CATEGORIES
  
  const selectedProblems: Problem[] = []
  
  // 各カテゴリーから1問ずつランダムに選択
  categories.forEach(category => {
    const categoryProblems = problems.filter(p => p.category === category)
    if (categoryProblems.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryProblems.length)
      selectedProblems.push(categoryProblems[randomIndex])
    }
  })
  
  // 問題をシャッフル
  return shuffleArray(selectedProblems)
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}