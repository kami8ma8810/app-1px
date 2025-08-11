import { defineStore } from 'pinia'
import type { Problem, GameState, GameResult } from '../types'
import { getRandomProblems } from '../utils/random'

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    currentProblemIndex: 0,
    problems: [],
    answers: [],
    startTime: 0,
    endTime: undefined
  }),

  getters: {
    currentProblem: (state): Problem | undefined => {
      return state.problems[state.currentProblemIndex]
    },
    
    correctCount: (state): number => {
      return state.answers.filter(answer => answer).length
    },
    
    isGameFinished: (state): boolean => {
      return state.currentProblemIndex >= state.problems.length
    },
    
    gameProgress: (state): number => {
      return state.currentProblemIndex + 1
    }
  },

  actions: {
    startNewGame() {
      this.problems = getRandomProblems()
      this.currentProblemIndex = 0
      this.answers = []
      this.startTime = Date.now()
      this.endTime = undefined
    },

    submitAnswer(isCorrect: boolean) {
      this.answers.push(isCorrect)
      this.currentProblemIndex++
      
      if (this.isGameFinished) {
        this.endTime = Date.now()
      }
    },

    getResult(): GameResult {
      const correctCount = this.correctCount
      const totalCount = this.problems.length
      
      let title = 'もっと頑張ろう！'
      if (correctCount === 10) {
        title = 'ピクセルマスター'
      } else if (correctCount >= 8) {
        title = 'ピクセルエキスパート'
      } else if (correctCount >= 6) {
        title = 'ピクセルプロ'
      } else if (correctCount >= 4) {
        title = 'ピクセル見習い'
      } else if (correctCount >= 2) {
        title = 'ピクセル初心者'
      }
      
      return {
        correctCount,
        totalCount,
        title,
        playedAt: new Date()
      }
    },

    resetGame() {
      this.currentProblemIndex = 0
      this.problems = []
      this.answers = []
      this.startTime = 0
      this.endTime = undefined
    }
  }
})