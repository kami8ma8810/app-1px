<template>
  <div class="w-full h-full relative">
    <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50">
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
      
      <!-- 正解エリアのハイライト -->
      <div 
        v-if="showAnswer || showAnswerProp" 
        class="absolute border-4 border-emerald-500 bg-emerald-500/20 pointer-events-none rounded-lg"
        :style="{
          left: `${problem.answerArea.x}px`,
          top: `${problem.answerArea.y}px`,
          width: `${problem.answerArea.width}px`,
          height: `${problem.answerArea.height}px`
        }"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 animate-shimmer"></div>
      </div>
      
      <!-- フィードバック -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 scale-0"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
      >
        <div 
          v-if="feedback" 
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
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
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Problem } from '../types'

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
const showAnswerProp = computed(() => props.showAnswer)

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
  }
}

const checkAnswer = (x: number, y: number) => {
  if (!props.showModified || showAnswer.value || showAnswerProp.value || props.disabled) return
  
  const rect = problemFrame.value?.getBoundingClientRect()
  if (!rect) return
  
  const relativeX = x - rect.left
  const relativeY = y - rect.top
  
  const { answerArea } = props.problem
  const margin = 30 // タッチデバイスでの誤差を考慮
  
  const isCorrect = 
    relativeX >= answerArea.x - margin &&
    relativeX <= answerArea.x + answerArea.width + margin &&
    relativeY >= answerArea.y - margin &&
    relativeY <= answerArea.y + answerArea.height + margin
  
  feedback.value = isCorrect ? 'correct' : 'incorrect'
  
  // 正解・不正解に関わらず答えを表示
  showAnswer.value = true
  
  emit('answer', isCorrect)
  
  setTimeout(() => {
    feedback.value = null
  }, 2500)
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
  showAnswer.value = false
  feedback.value = null
})
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>