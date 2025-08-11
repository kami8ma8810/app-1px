<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
    <!-- ヘッダー -->
    <div class="backdrop-blur-md bg-white/70 shadow-lg">
      <div class="p-4 lg:p-6">
        <div class="max-w-4xl mx-auto">
          <!-- 進行状況 -->
          <div class="flex items-center justify-between mb-3">
            <span class="text-lg font-bold text-gray-800">
              問題 {{ gameStore.gameProgress }}
            </span>
            <span class="text-sm text-gray-600">
              10問中
            </span>
          </div>
          <!-- プログレスバー -->
          <div class="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              class="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out shadow-lg" 
              :style="{ width: `${(gameStore.gameProgress - 1) * 10}%` }"
            />
            <!-- プログレスバーのハイライト -->
            <div 
              class="absolute inset-y-0 left-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full transition-all duration-500 ease-out" 
              :style="{ width: `${(gameStore.gameProgress - 1) * 10}%` }"
            />
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
            ずれている箇所をクリックまたはタップしてください
          </h2>
        </div>
      </div>
      
      <!-- 問題表示エリア -->
      <div v-if="currentProblem" class="flex-1 w-full flex items-center justify-center">
        <div class="w-full max-w-5xl">
          <ProblemDisplay
            :problem="currentProblem"
            :show-modified="true"
            :show-answer="showAnswer"
            @answer="handleAnswer"
          />
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
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import ProblemDisplay from './ProblemDisplay.vue'

const router = useRouter()
const gameStore = useGameStore()

const currentProblem = computed(() => gameStore.currentProblem)
const showAnswer = ref(false)
const showNextButton = ref(false)

// 問題が変わったときに状態をリセット
watch(currentProblem, () => {
  showAnswer.value = false
  showNextButton.value = false
})

const handleAnswer = async (isCorrect: boolean) => {
  if (isCorrect) {
    showAnswer.value = true
    gameStore.submitAnswer(true)
    
    // 正解の場合は次へボタンを表示
    setTimeout(() => {
      showNextButton.value = true
    }, 1500)
  } else {
    // 不正解の場合は再チャレンジ可能（submitAnswerは呼ばない）
  }
}

const nextProblem = () => {
  if (gameStore.isGameFinished) {
    router.push('/result')
  } else {
    // 次の問題に進む前に状態をリセット
    showAnswer.value = false
    showNextButton.value = false
  }
}
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