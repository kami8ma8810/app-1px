<template>
  <div v-if="show" class="fixed top-20 left-1/2 -translate-x-1/2 z-50">
    <div 
      class="px-8 py-4 text-2xl font-bold text-white rounded-lg shadow-lg"
      :class="{
        'bg-green-500': type === 'correct',
        'bg-red-500': type === 'incorrect'
      }"
    >
      {{ type === 'correct' ? '正解！' : '不正解' }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  type: 'correct' | 'incorrect'
}>()
</script>