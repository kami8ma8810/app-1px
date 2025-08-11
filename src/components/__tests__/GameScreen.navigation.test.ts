import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import GameScreen from '../GameScreen.vue'
import { useGameStore } from '../../stores/game'

// Mock ProblemDisplay component
vi.mock('../ProblemDisplay.vue', () => ({
  default: {
    name: 'ProblemDisplay',
    props: ['problem', 'showModified', 'showAnswer', 'disabled'],
    template: '<div class="problem-display">Problem Display</div>'
  }
}))

// Mock window.confirm
global.confirm = vi.fn(() => true)

describe('GameScreen Navigation', () => {
  let router: any

  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
    
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/game', component: GameScreen },
        { path: '/result', component: { template: '<div>Result</div>' } }
      ]
    })
    
    router.push('/game')
  })

  it('should redirect to home if game not started', async () => {
    const store = useGameStore()
    // Don't start the game - problems should be empty
    
    const push = vi.spyOn(router, 'push')
    
    mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    await new Promise(resolve => setTimeout(resolve, 50))
    
    expect(push).toHaveBeenCalledWith('/')
  })

  it('should show go to top button', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    const topButton = wrapper.find('button')
    expect(topButton.exists()).toBe(true)
    expect(topButton.text()).toContain('トップに戻る')
  })

  it('should confirm before going to top', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    const push = vi.spyOn(router, 'push')
    const resetGame = vi.spyOn(store, 'resetGame')
    
    const topButton = wrapper.find('button')
    await topButton.trigger('click')
    
    expect(global.confirm).toHaveBeenCalledWith('ゲームを中断してトップページに戻りますか？')
    expect(resetGame).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/')
  })

  it('should not go to top if confirm cancelled', async () => {
    global.confirm = vi.fn(() => false)
    
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    const push = vi.spyOn(router, 'push')
    const resetGame = vi.spyOn(store, 'resetGame')
    
    const topButton = wrapper.find('button')
    await topButton.trigger('click')
    
    expect(global.confirm).toHaveBeenCalled()
    expect(resetGame).not.toHaveBeenCalled()
    expect(push).not.toHaveBeenCalledWith('/')
  })
})