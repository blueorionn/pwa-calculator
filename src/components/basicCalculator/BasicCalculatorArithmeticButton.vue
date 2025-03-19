<script setup lang="ts">
  defineProps<{
    operation: 'addition' | 'subtraction' | 'multiplication' | 'division'
  }>()
</script>

<template>
  <button
    type="button"
    v-if="operation === 'addition'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Addition</span>
    <span className="space-grotesk-500 text-xl">+</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'subtraction'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Subtraction</span>
    <span className="space-grotesk-500 text-xl">-</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'multiplication'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Multiplication</span>
    <span className="space-grotesk-500 text-xl">&times;</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'division'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Division</span>
    <span className="space-grotesk-500 text-xl">&divide;</span>
  </button>
</template>
