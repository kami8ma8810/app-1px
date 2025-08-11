import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '../game'

describe('Game Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should start a new game with 10 problems', () => {
    const store = useGameStore()
    store.startNewGame()
    
    expect(store.problems.length).toBe(10)
    expect(store.currentProblemIndex).toBe(0)
    expect(store.answers.length).toBe(0)
  })

  it('should progress through problems correctly', () => {
    const store = useGameStore()
    store.startNewGame()
    
    expect(store.gameProgress).toBe(1)
    expect(store.isGameFinished).toBe(false)
    
    // Answer first question
    store.submitAnswer(true)
    expect(store.currentProblemIndex).toBe(1)
    expect(store.gameProgress).toBe(2)
    expect(store.answers.length).toBe(1)
  })

  it('should finish game after 10 questions', () => {
    const store = useGameStore()
    store.startNewGame()
    
    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      expect(store.isGameFinished).toBe(false)
      store.submitAnswer(true)
    }
    
    expect(store.isGameFinished).toBe(true)
    expect(store.answers.length).toBe(10)
    expect(store.correctCount).toBe(10)
  })

  it('should calculate correct count accurately', () => {
    const store = useGameStore()
    store.startNewGame()
    
    // Answer with mixed results
    store.submitAnswer(true)
    store.submitAnswer(false)
    store.submitAnswer(true)
    store.submitAnswer(true)
    
    expect(store.correctCount).toBe(3)
  })

  it('should return correct titles based on score', () => {
    const store = useGameStore()
    store.startNewGame()
    
    // Test different scores
    const testCases = [
      { correct: 10, title: 'ピクセルマスター' },
      { correct: 8, title: 'ピクセルエキスパート' },
      { correct: 6, title: 'ピクセルプロ' },
      { correct: 4, title: 'ピクセル見習い' },
      { correct: 2, title: 'ピクセル初心者' },
      { correct: 0, title: 'もっと頑張ろう！' }
    ]
    
    testCases.forEach(({ correct, title }) => {
      store.resetGame()
      store.startNewGame()
      
      for (let i = 0; i < 10; i++) {
        store.submitAnswer(i < correct)
      }
      
      const result = store.getResult()
      expect(result.title).toBe(title)
      expect(result.correctCount).toBe(correct)
    })
  })
})