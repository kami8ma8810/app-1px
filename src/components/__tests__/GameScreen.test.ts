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
    emits: ['answer'],
    template: '<div class="problem-display" @click="$emit(\'answer\', true)">Problem Display</div>'
  }
}))

// Mock window.confirm
global.confirm = vi.fn(() => true)

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
    
    // Initially, next button should not exist (but top button exists)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(1) // Only top button
    expect(buttons[0].text()).toContain('トップに戻る')
    
    // Simulate correct answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    await problemDisplay.trigger('click')
    
    // Wait for timeout
    await new Promise(resolve => setTimeout(resolve, 1600))
    
    // Next button should now be visible
    const buttonsAfter = wrapper.findAll('button')
    expect(buttonsAfter.length).toBe(2) // Top button + Next button
    expect(buttonsAfter[1].text()).toBe('次の問題へ')
  })

  it('should show answer and explanation on wrong answer', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    await wrapper.vm.$nextTick()
    
    // Mock wrong answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    
    // Emit wrong answer
    problemDisplay.vm.$emit('answer', false)
    
    // Multiple nextTicks to ensure all reactive updates are processed
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    
    // Check the component's data directly
    const gameScreenVm = wrapper.vm as any
    expect(gameScreenVm.hasAnswered).toBe(true)
    expect(gameScreenVm.isCorrect).toBe(false)
    expect(gameScreenVm.showAnswer).toBe(true)
    
    // Should show answer and move to next problem
    expect(problemDisplay.props('showAnswer')).toBe(true)
    expect(problemDisplay.props('disabled')).toBe(true)
    
    // Should show explanation
    const explanationText = wrapper.text()
    expect(explanationText).toContain('不正解')
    
    // Wait for timeout
    await new Promise(resolve => setTimeout(resolve, 1100))
    
    // Next button should be visible
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2) // Top button + Next button
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
    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click') // Click the next button, not the top button
    
    expect(push).toHaveBeenCalledWith('/result')
  })
})