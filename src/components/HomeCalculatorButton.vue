<script setup lang="ts">
  defineProps(['title', 'link'])
</script>

<template>
  <router-link
    :to="link"
    class="group flex w-full items-end gap-2.5 rounded-md border-2 border-gray-800 bg-gray-900 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-gray-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      class="aspect-auto h-4 w-4 fill-gray-200 lg:h-6 lg:w-6"
      v-if="title === 'basic'"
    >
      <path
        d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      class="aspect-auto h-4 w-4 fill-gray-200 lg:h-6 lg:w-6"
      v-else-if="title === 'scientific'"
    >
      <path
        d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="aspect-auto h-4 w-4 fill-gray-200 lg:h-6 lg:w-6"
      v-else-if="title === 'bmi'"
    >
      <path
        d="M432 32H80a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V80a48.05 48.05 0 00-48-48zm-16.71 165l-52.46 61.73a27.83 27.83 0 01-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 01-37.65-4.62L96.71 197a32.12 32.12 0 01.42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 01.42 42z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      class="aspect-auto h-4 w-4 fill-gray-200 lg:h-6 lg:w-6"
      v-else-if="title === 'Unit Converter'"
    >
      <path
        d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z"
      />
    </svg>
    <span
      class="space-grotesk-500 text-gray-200 uppercase transition-all group-hover:text-gray-100"
    >
      {{ title }}
    </span>
  </router-link>
</template>
