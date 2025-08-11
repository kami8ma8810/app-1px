const STORAGE_KEYS = {
  BEST_SCORE: 'one-pixel-best-score'
} as const

class TypedStorage {
  getBestScore(): number {
    try {
      const value = localStorage.getItem(STORAGE_KEYS.BEST_SCORE)
      return value ? parseInt(value, 10) : 0
    } catch (error) {
      console.error('Failed to get best score from localStorage:', error)
      return 0
    }
  }
  
  setBestScore(score: number): void {
    try {
      localStorage.setItem(STORAGE_KEYS.BEST_SCORE, score.toString())
    } catch (error) {
      console.error('Failed to save best score to localStorage:', error)
    }
  }
  
  clearBestScore(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.BEST_SCORE)
    } catch (error) {
      console.error('Failed to clear best score from localStorage:', error)
    }
  }
}

export const storage = new TypedStorage()