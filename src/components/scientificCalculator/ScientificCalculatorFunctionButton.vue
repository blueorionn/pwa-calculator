<script setup lang="ts">
  defineProps<{
    name: 'clear' | 'clear-all' | 'eval' | 'delete'
  }>()
</script>

<template>
  <button
    type="button"
    v-if="name === 'clear'"
    className="bg-gray-800 flex justify-center items-center rounded-sm py-4 hover:bg-gray-900 transition-all duration-100"
  >
    <span className="sr-only">clear</span>
    <span className="space-grotesk-500">C</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'clear-all'"
    className="bg-gray-800 flex justify-center items-center rounded-sm py-4 hover:bg-gray-900 transition-all duration-100"
  >
    <span className="sr-only">Clear all</span>
    <span className="space-grotesk-500">AC</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'eval'"
    className="bg-sky-600 flex justify-center items-center rounded-sm py-4 hover:bg-sky-500 transition-all duration-100"
  >
    <span className="sr-only">Evaluate</span>
    <span className="space-grotesk-500 text-xl">=</span>
  </button>
  <button
    type="button"
    v-else-if="name === 'delete'"
    title="delete"
    className="bg-gray-900 flex justify-center items-center rounded-sm py-4 hover:bg-gray-800 transition-all duration-100"
  >
    <span className="sr-only">Delete button</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      style="height: 1.25rem; width: 1.25rem; aspect-ratio: auto; fill: #e5e7eb"
    >
      <path
        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"
      />
    </svg>
  </button>
</template>
