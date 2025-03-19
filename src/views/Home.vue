<script setup lang="ts">
  import HomeCalculatorButton from '../components/HomeCalculatorButton.vue'
</script>

<template>
  <header class="h-max w-full px-2 py-4 md:py-8 lg:py-12">
    <nav class="mx-auto flex max-w-screen-2xl items-center gap-4">
      <a href="/">
        <img
          src="/calculator-logo.svg"
          alt="Website Logo"
          width="256"
          height="256"
          class="aspect-auto h-8 w-8 lg:h-12 lg:w-12"
        />
      </a>
    </nav>
  </header>
  <main class="h-full w-full py-8 lg:py-12 xl:py-16">
    <section class="mx-auto max-w-screen-md px-4">
      <h1 class="space-grotesk-500 text-xl font-bold text-gray-100 xl:text-2xl">CALCULATOR APP</h1>
      <h2 class="my-4 text-base text-gray-300 xl:text-lg">
        Welcome to my <strong>Calculator App!</strong>
      </h2>
      <div class="my-6 lg:my-8">
        <p class="text-lg leading-7 font-medium text-gray-400">
          The Calculator App is a multi-functional web application built with vue. It includes
          various calculators, such as basic, scientific, Unit Converter, and BMI calculators,
          designed to cater to diverse user needs.
        </p>
      </div>
    </section>
    <section class="mx-auto my-4 max-w-screen-md px-4 md:my-8 lg:my-12">
      <h1 class="space-grotesk-500 text-xl font-bold text-gray-400">CALCULATORS</h1>
      <div
        class="my-4 grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 md:my-6 md:gap-4 lg:my-8 lg:gap-6"
      >
        <HomeCalculatorButton title="basic" link="/basic" />
        <HomeCalculatorButton title="scientific" link="/scientific" />
        <HomeCalculatorButton title="bmi" link="/bmi" />
        <HomeCalculatorButton title="Unit Converter" link="/unit-converter" />
      </div>
    </section>
    <section class="mx-auto my-4 max-w-screen-md px-4 md:my-8 lg:my-12">
      <div>
        <h2 class="text-gray-300">Find me across web</h2>
        <div class="flex w-full gap-2 py-2 md:gap-4 md:py-4">
          <a
            href="https://github.com/blueorionn/pwa-calculator"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="group relative flex flex-row-reverse items-center justify-center gap-1 md:gap-2"
          >
            <span
              class="absolute right-0 bottom-0 left-0 inline-block h-0.5 bg-black transition-all group-hover:bg-gray-800"
            ></span>
            <span class="text-gray-400 transition-all group-hover:text-gray-300"> Github </span>
            <svg
              class="h-3 w-3 fill-gray-500 transition-all hover:fill-gray-800 md:h-4 md:w-4 lg:h-5 lg:w-5 dark:fill-gray-400 dark:hover:fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              ></path>
            </svg>
          </a>
          <a
            href="https://x.com/SS_Swadhinn"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="group relative flex flex-row-reverse items-center justify-center gap-1 md:gap-2"
          >
            <span
              class="absolute right-0 bottom-0 left-0 inline-block h-0.5 bg-black transition-all group-hover:bg-gray-800"
            ></span>
            <span class="text-gray-400 transition-all group-hover:text-gray-300"> Twitter/X </span>
            <svg
              class="h-3 w-3 fill-gray-500 transition-all group-hover:fill-gray-200 md:h-4 md:w-4 dark:fill-gray-400"
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer class="w-full">
    <section class="mx-auto w-full max-w-screen-md p-4">
      <a
        href="https://github.com/blueorionn/pwa-calculator/blob/main/LICENSE"
        target="_blank"
        class="text-gray-400"
      >
        <span class="cursor-pointer text-blue-300 transition-all hover:text-blue-400"> MIT </span>
      </a>
      <span class="mx-2 cursor-default text-gray-400 lg:mx-4"> &copy; 2024 Functionbasket. </span>
    </section>
  </footer>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');

  .space-grotesk-500 {
    font-family: 'Space Grotesk', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

  .roboto-400 {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
  }
</style>
