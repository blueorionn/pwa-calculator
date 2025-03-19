<script setup lang="ts">
  defineProps<{
    identity: 'sin' | 'cos' | 'tan' | 'inv' | 'angle'
  }>()
</script>

<template>
  <button
    type="button"
    v-if="identity === 'sin'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">Sin</span>
  </button>
  <button
    type="button"
    v-else-if="identity === 'cos'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">Cos</span>
  </button>
  <button
    type="button"
    v-else-if="identity === 'tan'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">Tan</span>
  </button>
  <button
    type="button"
    v-else-if="identity === 'inv'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">Inv</span>
  </button>
  <div
    className="relative col-span-2 grid grid-cols-2 rounded-sm py-4 bg-gray-900"
    v-else-if="identity === 'angle'"
  >
    <span className="sr-only">Toogle Radian and Degree</span>
    <span
      className="translate-x-[100%] absolute inset-0 block w-[50%] h-full rounded-sm border border-blue-500 transition-all duration-150"
    ></span>
    <button type="button">
      <span className="space-grotesk-500">RAD</span>
    </button>
    <button type="button">
      <span className="space-grotesk-500">DEG</span>
    </button>
  </div>
</template>
