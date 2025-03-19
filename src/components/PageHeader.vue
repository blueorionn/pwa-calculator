<script setup lang="ts">
  defineProps(['title'])
</script>

<template>
  <header className="w-full h-max py-4 md:py-8 lg:py-12 px-2">
    <nav className="max-w-screen-2xl mx-auto flex gap-4 items-end">
      <router-link to="/">
        <img
          src="/calculator-logo.png"
          alt="Website Logo"
          width="{256}"
          height="{256}"
          className="h-8 w-8 lg:h-12 lg:w-12 aspect-auto"
        />
      </router-link>
      <h1
        className="space-grotesk-500 mr-8 lg:mr-12 text-lg xl:text-xl text-nowrap whitespace-nowrap font-bold grow uppercase text-center text-gray-100"
      >
        {{ title }}
      </h1>
    </nav>
  </header>
</template>
