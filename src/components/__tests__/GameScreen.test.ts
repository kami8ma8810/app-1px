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
    let nextButton = wrapper.find('button:contains("次の問題へ")')
    expect(nextButton.exists()).toBe(false)
    
    // Simulate correct answer
    const problemDisplay = wrapper.findComponent({ name: 'ProblemDisplay' })
    await problemDisplay.trigger('click')
    
    // Wait for timeout
    await new Promise(resolve => setTimeout(resolve, 1600))
    
    // Next button should now be visible
    nextButton = wrapper.find('button')
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
    
    // Simulate wrong answer by clicking the Wrong button
    const wrongButton = problemDisplay.find('button')
    await wrongButton.trigger('click')
    
    // Wait for Vue updates
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // After answer - should show answer and be disabled
    expect(problemDisplay.props('showAnswer')).toBe(true)
    expect(problemDisplay.props('disabled')).toBe(true)
    
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