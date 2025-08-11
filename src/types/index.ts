export interface Problem {
  id: string
  category: ProblemCategory
  title: string
  description: string
  baseHTML: string
  baseCSS: string
  modifiedHTML: string
  modifiedCSS: string
  answerArea: AnswerArea
}

export type ProblemCategory = 
  | 'grid-layout'
  | 'border'
  | 'spacing'
  | 'text'
  | 'icon-image'
  | 'button-interactive'
  | 'background'
  | 'shadow-effect'
  | 'responsive'
  | 'animation'

export interface AnswerArea {
  x: number
  y: number
  width: number
  height: number
}

export interface GameState {
  currentProblemIndex: number
  problems: Problem[]
  answers: boolean[]
  startTime: number
  endTime?: number
}

export interface GameResult {
  correctCount: number
  totalCount: number
  title: string
  titleImage?: string
  playedAt: Date
}

export type GameScreen = 'start' | 'game' | 'result'