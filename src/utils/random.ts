import type { Problem, ProblemCategory } from '../types'
import { problems } from '../data/problems'

export function getRandomProblems(): Problem[] {
  const categories: ProblemCategory[] = [
    'grid-layout',
    'border',
    'spacing',
    'text',
    'icon-image',
    'button-interactive',
    'background',
    'shadow-effect',
    'responsive',
    'animation'
  ]
  
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