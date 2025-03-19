<script setup lang="ts">
  defineProps<{
    name: 'period' | 'pi' | 'e' | 'ParenthesisRight' | 'ParenthesisLeft'
  }>()
</script>

<template>
  <button
    type="button"
    v-if="name === 'period'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Period</span>
    <span className="roboto-400 text-xl">&centerdot;</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'pi'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Pi</span>
    <span className="roboto-400 text-xl">&pi;</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'e'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Euler's number</span>
    <span className="roboto-400">e</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'ParenthesisRight'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Right Parenthesis</span>
    <span className="roboto-400">{{ ')' }}</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'ParenthesisLeft'"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Left Parenthesis</span>
    <span className="roboto-400">{{ '(' }}</span>
  </button>
</template>
