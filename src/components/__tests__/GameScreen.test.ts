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
    setup(props: any, { emit }: any) {
      const handleClick = (isCorrect: boolean) => {
        emit('answer', isCorrect)
      }
      return { handleClick }
    },
    template: '<div class="problem-display" @click="handleClick(true)">Problem Display <button @click.stop="handleClick(false)">Wrong</button></div>'
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
    
    // Initially, next button should not exist
    const allButtonsInitial = wrapper.findAll('button')
    const nextButtonInitialFound = allButtonsInitial.some(b => b.text().includes('次の問題へ'))
    expect(nextButtonInitialFound).toBe(false)
    
    // Simulate correct answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    await problemDisplay.vm.$emit('answer', true)
    
    // Wait for Vue updates and timeout
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 1100))
    
    // Next button should now be visible
    const allButtons = wrapper.findAll('button')
    const nextButtonFound = allButtons.some(b => b.text().includes('次の問題へ'))
    expect(nextButtonFound).toBe(true)
  })

  it('should show answer and explanation on wrong answer', async () => {
    const store = useGameStore()
    store.startNewGame()
    
    const wrapper = mount(GameScreen, {
      global: {
        plugins: [router]
      }
    })
    
    // Wait for component to be fully mounted
    await wrapper.vm.$nextTick()
    
    // Find ProblemDisplay component
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    expect(problemDisplay.exists()).toBe(true)
    
    // Before answer - should not show answer or be disabled
    expect(problemDisplay.props('showAnswer')).toBe(false)
    expect(problemDisplay.props('disabled')).toBe(false)
    
    // Emit answer event directly from ProblemDisplay
    await problemDisplay.vm.$emit('answer', false)
    
    // Wait for Vue updates and handleAnswer to complete
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Re-find ProblemDisplay after state update
    const updatedProblemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    
    // After answer - should show answer and be disabled
    expect(updatedProblemDisplay.props('showAnswer')).toBe(true)
    expect(updatedProblemDisplay.props('disabled')).toBe(true)
    
    // Check that explanation is shown
    const html = wrapper.html()
    expect(html).toContain('不正解')
    
    // Check problem description is shown
    const currentProblem = store.currentProblem
    if (currentProblem) {
      expect(html).toContain(currentProblem.description)
    }
    
    // Wait for the next button to appear
    await new Promise(resolve => setTimeout(resolve, 1100))
    
    // Next button should now be visible
    const allButtons = wrapper.findAll('button')
    const nextButtonFound = allButtons.some(b => b.text().includes('次の問題へ'))
    expect(nextButtonFound).toBe(true)
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