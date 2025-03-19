<script setup lang="ts">
  defineProps<{
    digit: number
  }>()
</script>

<template>
  <button
    type="button"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">{{ digit }}</span>
  </button>
</template>
