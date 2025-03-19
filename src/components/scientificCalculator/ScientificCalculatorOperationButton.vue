<script setup lang="ts">
  defineProps<{
    operation:
      | 'addition'
      | 'subtraction'
      | 'multiplication'
      | 'division'
      | 'factorial'
      | 'reciprocal'
      | 'log'
      | 'ln'
      | 'modulo'
      | 'square'
      | 'cube'
      | 'sqrt'
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
  <button
    type="button"
    v-else-if="operation === 'factorial'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Factorial</span>
    <span className="space-grotesk-500">n!</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'reciprocal'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Reciprocal</span>
    <span className="space-grotesk-500"><sup>1</sup>&frasl;<sub>x</sub></span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'log'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="space-grotesk-500">log</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'ln'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Natural log</span>
    <span className="space-grotesk-500">ln</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'modulo'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Modulo</span>
    <span className="space-grotesk-500">%</span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'square'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Square</span>
    <span className="space-grotesk-500">x<sup>2</sup></span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'cube'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Cube</span>
    <span className="space-grotesk-500">x<sup>3</sup></span>
  </button>
  <button
    type="button"
    v-else-if="operation === 'sqrt'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Square Root</span>
    <span className="space-grotesk-500">&radic;x</span>
  </button>
</template>
