<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
    <!-- ヘッダー -->
    <div class="backdrop-blur-md bg-white/70 shadow-lg">
      <div class="p-4 lg:p-6">
        <div class="max-w-6xl mx-auto flex items-center gap-4">
          <!-- トップに戻るボタン -->
          <button
            class="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white/50 hover:bg-white/70 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
                   transition-colors duration-150"
            @click="goToTop"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span class="hidden sm:inline font-medium">トップに戻る</span>
          </button>
          
          <!-- 進行状況 -->
          <div class="flex-1 max-w-4xl">
            <div class="flex items-center justify-between mb-3">
              <span class="text-lg font-bold text-gray-800">
                問題 {{ gameStore.gameProgress }}
              </span>
              <span class="text-sm text-gray-600">
                {{ GAME_CONFIG.TOTAL_QUESTIONS }}問中
              </span>
            </div>
            <!-- プログレスバー -->
            <div class="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div 
                class="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out shadow-lg" 
                :style="{ width: `${(gameStore.gameProgress - 1) * (100 / GAME_CONFIG.TOTAL_QUESTIONS)}%` }"
              />
              <!-- プログレスバーのハイライト -->
              <div 
                class="absolute inset-y-0 left-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full transition-all duration-500 ease-out" 
                :style="{ width: `${(gameStore.gameProgress - 1) * (100 / GAME_CONFIG.TOTAL_QUESTIONS)}%` }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- メインコンテンツ -->
    <div class="flex-1 p-4 lg:p-8 flex flex-col items-center max-w-7xl w-full mx-auto">
      <!-- 操作説明 -->
      <div class="text-center mb-6 animate-fade-in">
        <div class="backdrop-blur-md bg-white/50 rounded-2xl px-8 py-4 shadow-glass inline-block">
          <h2 class="text-xl lg:text-2xl font-bold text-gray-800">
            1px違う箇所をクリックまたはタップしてください
          </h2>
          <p v-if="currentProblem" class="text-base text-gray-600 mt-2">
            {{ currentProblem.hint }}
          </p>
        </div>
      </div>
      
      <!-- 問題表示エリア -->
      <div v-if="currentProblem" class="flex-1 w-full flex items-center justify-center">
        <div class="w-full max-w-5xl">
          <ProblemDisplay
            :problem="currentProblem"
            :show-modified="true"
            :show-answer="showAnswer"
            :disabled="hasAnswered"
            @answer="handleAnswer"
          />
        </div>
      </div>
      
      <!-- 回答後の説明（正解時のみ） -->
      <div v-if="hasAnswered && currentProblem && isCorrect" class="mt-6 animate-fade-in">
        <div class="backdrop-blur-md bg-white/70 rounded-2xl p-6 shadow-glass max-w-2xl mx-auto">
          <div class="flex items-center gap-3 mb-3">
            <div class="text-emerald-600">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-emerald-700">
              正解！
            </h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ currentProblem.description }}
          </p>
        </div>
      </div>
      
      <!-- 次へボタン -->
      <div v-if="showNextButton" class="mt-6 animate-fade-in">
        <button 
          class="px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 
                 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2
                 active:scale-95 transition-transform duration-150"
          @click="nextProblem"
        >
          次の問題へ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import ProblemDisplay from './ProblemDisplay.vue'
import { ANIMATION_DURATIONS, GAME_CONFIG } from '../constants/game'

const router = useRouter()
const gameStore = useGameStore()

// ゲームが開始されていない場合はトップページにリダイレクト
onMounted(() => {
  if (!gameStore.currentProblem || gameStore.problems.length === 0) {
    router.push('/')
  }
})

const currentProblem = computed(() => gameStore.currentProblem)
const showAnswer = ref(false)
const showNextButton = ref(false)
const hasAnswered = ref(false)
const isCorrect = ref(false)
const pendingAnswer = ref<boolean | null>(null)

// 問題が変わったときに状態をリセット
watch(currentProblem, () => {
  showAnswer.value = false
  showNextButton.value = false
  hasAnswered.value = false
  isCorrect.value = false
  pendingAnswer.value = null
})

const handleAnswer = async (correct: boolean) => {
  // 既に回答済みの場合は何もしない
  if (hasAnswered.value) return
  
  hasAnswered.value = true
  isCorrect.value = correct
  showAnswer.value = true
  
  // 回答を一時的に保存（次の問題へ進む時に記録）
  pendingAnswer.value = correct
  
  // 次へボタンを表示
  setTimeout(() => {
    showNextButton.value = true
  }, ANIMATION_DURATIONS.SHOW_NEXT_BUTTON_DELAY)
}

const nextProblem = () => {
  // 保存しておいた回答を記録
  if (pendingAnswer.value !== null) {
    gameStore.submitAnswer(pendingAnswer.value)
    pendingAnswer.value = null
  }
  
  if (gameStore.isGameFinished) {
    router.push('/result')
  } else {
    // 次の問題に進む前に状態をリセット
    showAnswer.value = false
    showNextButton.value = false
    hasAnswered.value = false
    isCorrect.value = false
  }
}

const goToTop = () => {
  // 確認ダイアログを表示
  if (confirm('ゲームを中断してトップページに戻りますか？')) {
    gameStore.resetGame()
    router.push('/')
  }
}

// テスト用にエクスポート
defineExpose({
  handleAnswer,
  hasAnswered,
  isCorrect,
  showAnswer
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>