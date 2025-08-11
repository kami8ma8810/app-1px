import type { ProblemCategory } from '../types'

export const GAME_CONFIG = {
  TOTAL_QUESTIONS: 10,
  TOTAL_PROBLEMS: 100,
  CATEGORIES_COUNT: 10,
  SCORE_THRESHOLDS: {
    MASTER: 10,
    EXPERT: 8,
    PRO: 6,
    APPRENTICE: 4,
    BEGINNER: 2
  },
  TITLES: {
    MASTER: 'ピクセルマスター',
    EXPERT: 'ピクセルエキスパート', 
    PRO: 'ピクセルプロ',
    APPRENTICE: 'ピクセル見習い',
    BEGINNER: 'ピクセル初心者',
    DEFAULT: 'もっと頑張ろう！'
  }
} as const

export const ANIMATION_DURATIONS = {
  SHOW_NEXT_BUTTON_DELAY: 1000,
  FEEDBACK_DISPLAY: 2500,
  FADE_IN: 500,
  SCALE_IN: 500,
  ANSWER_HIGHLIGHT_DELAY: 1500
} as const

export const TOUCH_MARGIN = 30 // タッチデバイスでの誤差を考慮したマージン

export const PROBLEM_CATEGORIES: ProblemCategory[] = [
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
] as const