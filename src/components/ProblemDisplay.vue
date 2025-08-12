<template>
  <div>
    <div class="w-full h-full relative">
      <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50">
        <div 
          class="absolute inset-0 z-10"
          :class="{ 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled }"
          @click="handleClick"
          @touchstart="handleTouch"
        />
        
        <iframe
          ref="problemFrame"
          class="w-full min-h-[400px] border-0 block transition-all duration-300"
          :class="{ 'opacity-90': showAnswer || showAnswerProp }"
          :srcdoc="problemHTML"
          @load="onFrameLoad"
        />
        
        <!-- 正解エリアのハイライト（iframe内に表示するため、ここでは非表示） -->
        <!-- <div 
          v-if="(showAnswer || showAnswerProp) && isCorrect" 
          class="absolute border-4 border-emerald-500 bg-emerald-500/20 pointer-events-none rounded-lg"
          :style="highlightStyle"
        /> -->
      </div>
    </div>
    
    <!-- フィードバック（fixedで配置） -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-125"
    >
      <div 
        v-if="feedback" 
        class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none"
      >
        <div 
          class="px-16 py-8 text-5xl font-black text-white rounded-3xl shadow-2xl"
          :class="{
            'bg-gradient-to-r from-emerald-500 to-green-600': feedback === 'correct',
            'bg-gradient-to-r from-red-500 to-rose-600': feedback === 'incorrect'
          }"
        >
          <div class="flex items-center gap-4">
            <svg v-if="feedback === 'correct'" class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            {{ feedback === 'correct' ? '正解！' : '不正解' }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Problem } from '../types'
import { TOUCH_MARGIN, ANIMATION_DURATIONS } from '../constants/game'

const props = defineProps<{
  problem: Problem
  showModified: boolean
  showAnswer?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  answer: [isCorrect: boolean]
}>()

const problemFrame = ref<HTMLIFrameElement>()
const showAnswer = ref(false)
const feedback = ref<'correct' | 'incorrect' | null>(null)
const isCorrect = ref(false)

// feedbackの変更を監視
watch(feedback, (newVal) => {
  console.log('feedback changed:', newVal)
})
const showAnswerProp = computed(() => props.showAnswer)

// ハイライトのスタイルを計算
const highlightStyle = computed(() => {
  if (!problemFrame.value) {
    return {
      left: `${props.problem.answerArea.x}px`,
      top: `${props.problem.answerArea.y}px`,
      width: `${props.problem.answerArea.width}px`,
      height: `${props.problem.answerArea.height}px`
    }
  }
  
  // iframeのcomputed styleを取得してborderやpaddingを考慮
  const iframeStyle = window.getComputedStyle(problemFrame.value)
  const borderLeftWidth = parseFloat(iframeStyle.borderLeftWidth) || 0
  const borderTopWidth = parseFloat(iframeStyle.borderTopWidth) || 0
  const paddingLeft = parseFloat(iframeStyle.paddingLeft) || 0
  const paddingTop = parseFloat(iframeStyle.paddingTop) || 0
  
  // iframe内のスクロール位置を考慮
  const scrollLeft = problemFrame.value.contentWindow?.scrollX || 0
  const scrollTop = problemFrame.value.contentWindow?.scrollY || 0
  
  return {
    left: `${props.problem.answerArea.x + borderLeftWidth + paddingLeft - scrollLeft}px`,
    top: `${props.problem.answerArea.y + borderTopWidth + paddingTop - scrollTop}px`,
    width: `${props.problem.answerArea.width}px`,
    height: `${props.problem.answerArea.height}px`
  }
})

const problemHTML = computed(() => {
  const html = props.showModified ? props.problem.modifiedHTML : props.problem.baseHTML
  const css = props.showModified ? props.problem.modifiedCSS : props.problem.baseCSS
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow-x: auto;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
})

const onFrameLoad = () => {
  // iframeのサイズを調整
  if (problemFrame.value?.contentWindow) {
    const doc = problemFrame.value.contentWindow.document
    const height = Math.max(
      doc.body.scrollHeight,
      doc.documentElement.scrollHeight
    )
    problemFrame.value.style.height = `${height + 20}px`
    
    // デバッグ: iframe内のコンテンツの実際のサイズを確認
    console.log('iframe content size:', {
      bodyScrollHeight: doc.body.scrollHeight,
      bodyOffsetHeight: doc.body.offsetHeight,
      documentScrollHeight: doc.documentElement.scrollHeight,
      computedHeight: height
    })
  }
}

// iframe内にハイライトを表示する
const showHighlightInIframe = () => {
  if (!problemFrame.value?.contentWindow || !isCorrect.value) return
  
  const doc = problemFrame.value.contentWindow.document
  const { answerArea } = props.problem
  
  // 既存のハイライトを削除
  const existingHighlight = doc.getElementById('answer-highlight')
  if (existingHighlight) {
    existingHighlight.remove()
  }
  
  // ハイライト要素を作成
  const highlight = doc.createElement('div')
  highlight.id = 'answer-highlight'
  highlight.style.position = 'absolute'
  highlight.style.left = `${answerArea.x}px`
  highlight.style.top = `${answerArea.y}px`
  highlight.style.width = `${answerArea.width}px`
  highlight.style.height = `${answerArea.height}px`
  highlight.style.border = '4px solid #10b981'
  highlight.style.backgroundColor = 'rgba(16, 185, 129, 0.2)'
  highlight.style.borderRadius = '8px'
  highlight.style.pointerEvents = 'none'
  highlight.style.zIndex = '9999'
  
  // bodyに追加
  doc.body.appendChild(highlight)
}

const checkAnswer = (x: number, y: number) => {
  console.log('checkAnswer called:', { 
    showModified: props.showModified, 
    showAnswer: showAnswer.value, 
    showAnswerProp: showAnswerProp.value, 
    disabled: props.disabled 
  })
  
  if (!props.showModified || showAnswer.value || showAnswerProp.value || props.disabled) {
    console.log('checkAnswer early return')
    return
  }
  
  const rect = problemFrame.value?.getBoundingClientRect()
  if (!rect) {
    return
  }
  
  const relativeX = x - rect.left
  const relativeY = y - rect.top
  
  const { answerArea } = props.problem
  
  // デバッグ: 座標情報を出力
  console.log('座標計算デバッグ:', {
    click: { x, y },
    iframeRect: { left: rect.left, top: rect.top },
    relative: { x: relativeX, y: relativeY },
    answerArea,
    margin: TOUCH_MARGIN
  })
  
  const correct = 
    relativeX >= answerArea.x - TOUCH_MARGIN &&
    relativeX <= answerArea.x + answerArea.width + TOUCH_MARGIN &&
    relativeY >= answerArea.y - TOUCH_MARGIN &&
    relativeY <= answerArea.y + answerArea.height + TOUCH_MARGIN
  
  // 正解・不正解の状態を保存
  isCorrect.value = correct
  
  // フィードバックを設定
  feedback.value = correct ? 'correct' : 'incorrect'
  console.log('フィードバックを設定:', feedback.value)
  
  // 正解・不正解に関わらず答えを表示
  showAnswer.value = true
  
  // 正解の場合はハイライトを表示
  if (correct) {
    setTimeout(() => {
      showHighlightInIframe()
    }, 50)
  }
  
  emit('answer', correct)
  
  console.log('setTimeout設定:', ANIMATION_DURATIONS.FEEDBACK_DISPLAY)
  setTimeout(() => {
    console.log('フィードバックをnullに設定')
    feedback.value = null
  }, ANIMATION_DURATIONS.FEEDBACK_DISPLAY)
}

const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  checkAnswer(event.clientX, event.clientY)
}

const handleTouch = (event: TouchEvent) => {
  event.preventDefault()
  if (event.touches.length > 0) {
    const touch = event.touches[0]
    checkAnswer(touch.clientX, touch.clientY)
  }
}

watch(() => props.problem, () => {
  console.log('problem changed in watch')
  showAnswer.value = false
  feedback.value = null
  isCorrect.value = false
})

// 答えを表示するときにハイライトも表示
watch([showAnswer, showAnswerProp, isCorrect], () => {
  if ((showAnswer.value || showAnswerProp.value) && isCorrect.value) {
    // 少し遅延を入れてiframeの描画を待つ
    setTimeout(() => {
      showHighlightInIframe()
    }, 100)
  }
})
</script>