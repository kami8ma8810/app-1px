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
    props: ['problem', 'showModified', 'showAnswer'],
    emits: ['answer'],
    template: '<div class="problem-display" @click="$emit(\'answer\', true)">Problem Display</div>'
  }
}))

describe('GameScreen', () => {
  let router: any

  beforeEach(() => {
    setActivePinia(createPinia())
    
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/game', component: GameScreen },
        { path: '/result', component: { template: '<div>Result</div>' } }
      ]
    })
  })

  it('should not show answer highlight on initial render', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    // Check that showAnswer prop is false initially
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    expect(problemDisplay.props('showAnswer')).toBe(false)
  })

  it('should show next button only after correct answer', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    // Initially, next button should not exist
    expect(wrapper.find('button').exists()).toBe(false)
    
    // Simulate correct answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    await problemDisplay.trigger('click')
    
    // Wait for timeout
    await new Promise(resolve => setTimeout(resolve, 1600))
    
    // Next button should now be visible
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('次の問題へ')
  })

  it('should not progress on wrong answer', async () => {
    const store = useGameStore()
    store.startNewGame()
    const initialIndex = store.currentProblemIndex
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    // Mock wrong answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    problemDisplay.vm.$emit('answer', false)
    
    await wrapper.vm.$nextTick()
    
    // Should still be on same problem
    expect(store.currentProblemIndex).toBe(initialIndex)
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('should navigate to result after last question', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    // Answer all questions except last
    for (let i = 0; i < 9; i++) {
      store.submitAnswer(true)
    }
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    const push = vi.spyOn(router, 'push')
    
    // Answer last question
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    await problemDisplay.trigger('click')
    
    // Wait for timeout and click next
    await new Promise(resolve => setTimeout(resolve, 1600))
    await wrapper.find('button').trigger('click')
    
    expect(push).toHaveBeenCalledWith('/result')
  })
})