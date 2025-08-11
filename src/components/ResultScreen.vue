<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- 背景のパーティクル -->
    <div class="absolute inset-0">
      <div v-for="i in 20" :key="i" 
        class="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-50"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        }"
      ></div>
    </div>
    
    <div class="relative z-10 min-h-screen flex items-center justify-center p-5">
      <div class="text-center max-w-xl w-full">
        <!-- タイトル -->
        <h1 class="text-4xl lg:text-5xl font-black mb-8 text-gray-800 animate-fade-in">
          ゲーム終了！
        </h1>
        
        <!-- スコア表示 -->
        <div class="mb-10 animate-scale-in">
          <div class="text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            {{ result.correctCount }} / {{ result.totalCount }}
          </div>
          <div class="text-2xl text-gray-700 font-medium">問正解</div>
        </div>
        
        <!-- 称号 -->
        <div class="mb-12 animate-fade-in-delayed">
          <h2 class="text-3xl lg:text-4xl font-black mb-6 text-gray-800">
            {{ result.title }}
          </h2>
          <div 
            class="inline-flex items-center justify-center w-32 h-32 rounded-full shadow-2xl text-6xl"
            :class="{
              'bg-gradient-to-br from-yellow-400 to-amber-600 animate-pulse-slow': result.correctCount === 10,
              'bg-gradient-to-br from-gray-300 to-gray-500': result.correctCount >= 8,
              'bg-gradient-to-br from-orange-600 to-orange-800': result.correctCount >= 6,
              'bg-gradient-to-br from-blue-400 to-blue-600': result.correctCount >= 4,
              'bg-gradient-to-br from-emerald-400 to-emerald-600': result.correctCount >= 2,
              'bg-gradient-to-br from-gray-500 to-gray-700': result.correctCount < 2
            }"
          >
            <span class="drop-shadow-lg">{{ getTitleEmoji() }}</span>
          </div>
        </div>
        
        <canvas ref="titleCanvas" class="hidden"></canvas>
        
        <!-- アクションボタン -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            class="backdrop-blur-md bg-white/70 text-gray-800 px-8 py-4 text-lg font-bold rounded-2xl
                   shadow-glass focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2
                   active:scale-95 transition-transform duration-150"
            @click="saveImage"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              画像を保存
            </span>
          </button>
          
          <button 
            class="backdrop-blur-md bg-white/70 text-gray-800 px-8 py-4 text-lg font-bold rounded-2xl
                   shadow-glass focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2
                   active:scale-95 transition-transform duration-150"
            @click="shareResult"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 8.01c-.597.408-1.32.658-2.101.658a4.244 4.244 0 01-2.95-1.2A3.97 3.97 0 0112 16c0-1.473.797-2.757 1.982-3.448a4.244 4.244 0 012.95-1.2c.781 0 1.504.25 2.101.658M15 9.75v.75m-7.5 7.5h.008v.008H7.5v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0h.008v.008H15v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
              </svg>
              SNSでシェア
            </span>
          </button>
        </div>
        
        <!-- ナビゲーション -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            class="px-8 py-3 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 
                   text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2
                   active:scale-95 transition-transform duration-150"
            @click="replay"
          >
            もう一度プレイ
          </button>
          <button 
            class="px-8 py-3 text-lg font-bold rounded-2xl backdrop-blur-md bg-white/30 
                   text-gray-800 shadow-glass focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2
                   active:scale-95 transition-transform duration-150"
            @click="goHome"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { generateTitleImage, downloadImage } from '../utils/canvas'

const router = useRouter()
const gameStore = useGameStore()
const titleCanvas = ref<HTMLCanvasElement>()

const result = computed(() => gameStore.getResult())
const titleImageUrl = ref<string>('')

const getTitleEmoji = () => {
  const score = result.value.correctCount
  if (score === 10) return '🏆'
  if (score >= 8) return '🥇'
  if (score >= 6) return '🥈'
  if (score >= 4) return '🥉'
  return '✨'
}

onMounted(async () => {
  // ベストスコアの更新
  const currentBest = localStorage.getItem('one-pixel-best-score')
  const bestScore = currentBest ? parseInt(currentBest, 10) : 0
  if (result.value.correctCount > bestScore) {
    localStorage.setItem('one-pixel-best-score', result.value.correctCount.toString())
  }
  
  // 称号画像の生成
  titleImageUrl.value = await generateTitleImage(
    result.value.title,
    result.value.correctCount,
    result.value.totalCount
  )
})

const saveImage = async () => {
  if (titleImageUrl.value) {
    downloadImage(titleImageUrl.value)
  }
}

const shareResult = async () => {
  const text = `One Pixelで${result.value.correctCount}/10問正解！「${result.value.title}」の称号を獲得しました！`
  const url = window.location.href
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'One Pixel - 結果',
        text,
        url
      })
    } catch (err) {
      console.log('Share cancelled or failed')
    }
  } else {
    // Twitter/X共有へのフォールバック
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank')
  }
}

const replay = () => {
  gameStore.resetGame()
  gameStore.startNewGame()
  router.push('/game')
}

const goHome = () => {
  gameStore.resetGame()
  router.push('/')
}
</script>

<style scoped>
@keyframes scale-in {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-fade-in-delayed {
  animation: fade-in 0.5s ease-out 0.3s both;
}
</style>