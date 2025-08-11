import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import StartScreen from '../components/StartScreen.vue'
import GameScreen from '../components/GameScreen.vue'
import ResultScreen from '../components/ResultScreen.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'start',
    component: StartScreen
  },
  {
    path: '/game',
    name: 'game',
    component: GameScreen
  },
  {
    path: '/result',
    name: 'result',
    component: ResultScreen
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router