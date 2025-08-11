<template>
  <div
    class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
  >
    <!-- 背景のグラデーションメッシュ -->
    <div class="absolute inset-0 opacity-30">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
      ></div>
      <div
        class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"
      ></div>
      <div
        class="absolute bottom-0 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
      ></div>
    </div>

    <div
      class="relative z-10 min-h-screen flex items-center justify-center p-5"
    >
      <div class="text-center max-w-xl w-full">
        <!-- タイトル -->
        <h1
          class="text-7xl lg:text-8xl font-black mb-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          One Pixel
        </h1>
        <p class="text-2xl text-gray-700 mb-12 font-medium">
          1pxの違和感を見つけ出せ
        </p>

        <!-- 説明 -->
        <div
          class="backdrop-blur-md bg-white/30 rounded-3xl p-8 mb-10 shadow-glass border border-white/20"
        >
          <div class="text-gray-800 text-lg leading-relaxed space-y-3">
            <p class="text-base">
              デザインの中に隠された1pxのズレを見つけるゲームです。
            </p>
            <p class="text-base">
              問題の種類は100問あり、そこからランダムに10問出題されます。
            </p>
          </div>
        </div>

        <!-- スタートボタン -->
        <button
          class="relative px-12 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 active:scale-95 transition-transform duration-150"
          @click="startGame"
        >
          GAME START
        </button>

        <!-- ベストスコア -->
        <div v-if="bestScore !== null" class="mt-10">
          <div
            class="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 rounded-full px-6 py-3 shadow-glass"
          >
            <svg
              class="w-5 h-5 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="text-gray-800 font-medium"
              >ベストスコア: {{ bestScore }}/10</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";

const router = useRouter();
const gameStore = useGameStore();
const bestScore = ref<number | null>(null);

onMounted(() => {
  const saved = localStorage.getItem("one-pixel-best-score");
  if (saved) {
    bestScore.value = parseInt(saved, 10);
  }
});

const startGame = () => {
  gameStore.startNewGame();
  router.push("/game");
};
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
