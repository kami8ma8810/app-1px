import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ProblemDisplay from '../ProblemDisplay.vue'
import type { Problem } from '../../types'

// テスト用の問題データ
const testProblem: Problem = {
  id: 'test-1',
  category: 'grid-layout',
  title: 'グリッドアイテムの位置',
  hint: 'グリッドアイテムのひとつが1pxずれています',
  description: '3番目のグリッドアイテムが1px下にずれています',
  baseHTML: `
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
    </div>
  `,
  modifiedHTML: `
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
    </div>
  `,
  baseCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 40px;
    }
    .grid-item {
      background: #e3f2fd;
      padding: 30px;
      text-align: center;
    }
  `,
  modifiedCSS: `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 40px;
    }
    .grid-item {
      background: #e3f2fd;
      padding: 30px;
      text-align: center;
    }
    .grid-item:nth-child(3) {
      margin-top: 1px;
    }
  `,
  answerArea: {
    x: 520,
    y: 40,
    width: 220,
    height: 91
  }
}

describe('ProblemDisplay', () => {
  let mockGetBoundingClientRect: vi.Mock

  beforeEach(() => {
    // getBoundingClientRectをモック
    mockGetBoundingClientRect = vi.fn(() => ({
      left: 0,
      top: 0,
      right: 800,
      bottom: 600,
      width: 800,
      height: 600
    }))
  })

  it('正解時にハイライトが正しい位置に表示される', async () => {
    const wrapper = mount(ProblemDisplay, {
      props: {
        problem: testProblem,
        showModified: true,
        disabled: false
      }
    })

    // iframeのrefを取得
    const iframe = wrapper.vm.$refs.problemFrame as HTMLIFrameElement
    iframe.getBoundingClientRect = mockGetBoundingClientRect

    // 正解エリア内をクリック
    const clickX = testProblem.answerArea.x + 10
    const clickY = testProblem.answerArea.y + 10

    // クリックイベントをシミュレート
    const clickArea = wrapper.find('.absolute.inset-0.z-10')
    await clickArea.trigger('click', {
      clientX: clickX,
      clientY: clickY
    })

    await nextTick()

    // 正解フィードバックが表示されることを確認
    expect(wrapper.find('.bg-gradient-to-r.from-emerald-500').exists()).toBe(true)
    expect(wrapper.text()).toContain('正解！')

    // showHighlightInIframe関数が呼ばれることを確認
    // Note: iframe内のハイライトは単体テストでは直接確認できないため、
    // E2Eテストで確認する必要がある
    expect(wrapper.vm.isCorrect).toBe(true)
  })

  it('不正解時にはハイライトが表示されない', async () => {
    const wrapper = mount(ProblemDisplay, {
      props: {
        problem: testProblem,
        showModified: true,
        disabled: false
      }
    })

    const iframe = wrapper.vm.$refs.problemFrame as HTMLIFrameElement
    iframe.getBoundingClientRect = mockGetBoundingClientRect

    // 不正解エリアをクリック
    const clickX = 100
    const clickY = 100

    const clickArea = wrapper.find('.absolute.inset-0.z-10')
    await clickArea.trigger('click', {
      clientX: clickX,
      clientY: clickY
    })

    await nextTick()

    // 不正解フィードバックが表示されることを確認
    expect(wrapper.find('.bg-gradient-to-r.from-red-500').exists()).toBe(true)
    expect(wrapper.text()).toContain('不正解')

    // ハイライトが表示されないことを確認
    const highlight = wrapper.find('.border-emerald-500')
    expect(highlight.exists()).toBe(false)
  })

  it('iframe内の座標が正しく計算される', async () => {
    const wrapper = mount(ProblemDisplay, {
      props: {
        problem: testProblem,
        showModified: true,
        disabled: false
      }
    })

    // iframeが左上から100px離れた位置にある場合をシミュレート
    const mockGetBoundingClientRectOffset = vi.fn(() => ({
      left: 100,
      top: 100,
      right: 900,
      bottom: 700,
      width: 800,
      height: 600
    }))

    const iframe = wrapper.vm.$refs.problemFrame as HTMLIFrameElement
    iframe.getBoundingClientRect = mockGetBoundingClientRectOffset

    // 実際の画面上の座標 = iframe位置 + 問題内の座標
    const clickX = 100 + testProblem.answerArea.x + 10
    const clickY = 100 + testProblem.answerArea.y + 10

    const clickArea = wrapper.find('.absolute.inset-0.z-10')
    await clickArea.trigger('click', {
      clientX: clickX,
      clientY: clickY
    })

    await nextTick()

    // 正解と判定されることを確認
    expect(wrapper.find('.bg-gradient-to-r.from-emerald-500').exists()).toBe(true)
  })
})