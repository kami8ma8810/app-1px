import { defineStore } from 'pinia'
import type { Problem, GameState, GameResult } from '../types'
import { getRandomProblems } from '../utils/random'
import { GAME_CONFIG } from '../constants/game'

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
      
      let title = GAME_CONFIG.TITLES.DEFAULT
      if (correctCount === GAME_CONFIG.SCORE_THRESHOLDS.MASTER) {
        title = GAME_CONFIG.TITLES.MASTER
      } else if (correctCount >= GAME_CONFIG.SCORE_THRESHOLDS.EXPERT) {
        title = GAME_CONFIG.TITLES.EXPERT
      } else if (correctCount >= GAME_CONFIG.SCORE_THRESHOLDS.PRO) {
        title = GAME_CONFIG.TITLES.PRO
      } else if (correctCount >= GAME_CONFIG.SCORE_THRESHOLDS.APPRENTICE) {
        title = GAME_CONFIG.TITLES.APPRENTICE
      } else if (correctCount >= GAME_CONFIG.SCORE_THRESHOLDS.BEGINNER) {
        title = GAME_CONFIG.TITLES.BEGINNER
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