<script setup lang="ts">
  import PageHeader from '../components/PageHeader.vue'
  import ScientificCalculatorDigitButton from '../components/scientificCalculator/ScientificCalculatorDigitButton.vue'
  import ScientificCalculatorOperationButton from '../components/scientificCalculator/ScientificCalculatorOperationButton.vue'
  import ScientificCalculatorConstantButton from '../components/scientificCalculator/ScientificCalculatorConstantButton.vue'
  import ScientificCalculatorFunctionButton from '../components/scientificCalculator/ScientificCalculatorFunctionButton.vue'
  import ScientificCalculatorTrigButton from '../components/scientificCalculator/ScientificCalculatorTrigButton.vue'
</script>

<template>
  <PageHeader title="Scientific Calculator" />
  <main class="min-h-[80vh] w-full px-4 py-8 lg:py-12 xl:py-16">
    <section class="mx-auto w-full max-w-screen-sm">
      <section class="h-full w-full rounded-sm">
        <div class="bg-gray-900">
          <div class="w-full p-2.5">
            <span
              class="space-grotesk-500 mx-auto inline-block w-full cursor-default text-right text-base font-semibold"
            >
              0
            </span>
          </div>
          <div class="w-full p-4">
            <span
              class="space-grotesk-500 inline-block w-full cursor-default overflow-auto text-right text-lg font-bold"
              style="scrollbar-width: none"
            >
              0
            </span>
          </div>
        </div>
        <div class="space-grotesk-500 mt-4 grid grid-rows-5 gap-2.5">
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorTrigButton identity="angle" />
            <button type="button">M+</button>
            <button type="button">M-</button>
            <button type="button">MC</button>
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorTrigButton identity="inv" />
            <ScientificCalculatorTrigButton identity="sin" />
            <ScientificCalculatorTrigButton identity="cos" />
            <ScientificCalculatorTrigButton identity="tan" />
            <ScientificCalculatorFunctionButton name="clear-all" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorConstantButton name="pi" />
            <ScientificCalculatorConstantButton name="e" />
            <ScientificCalculatorOperationButton operation="sqrt" />
            <ScientificCalculatorOperationButton operation="square" />
            <ScientificCalculatorOperationButton operation="cube" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorConstantButton name="ParenthesisLeft" />
            <ScientificCalculatorConstantButton name="ParenthesisRight" />
            <ScientificCalculatorFunctionButton name="clear" />
            <ScientificCalculatorFunctionButton name="delete" />
            <ScientificCalculatorOperationButton operation="division" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorOperationButton operation="reciprocal" />
            <ScientificCalculatorDigitButton :digit="7" />
            <ScientificCalculatorDigitButton :digit="8" />
            <ScientificCalculatorDigitButton :digit="9" />
            <ScientificCalculatorOperationButton operation="multiplication" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorOperationButton operation="factorial" />
            <ScientificCalculatorDigitButton :digit="4" />
            <ScientificCalculatorDigitButton :digit="5" />
            <ScientificCalculatorDigitButton :digit="6" />
            <ScientificCalculatorOperationButton operation="subtraction" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorOperationButton operation="ln" />
            <ScientificCalculatorDigitButton :digit="1" />
            <ScientificCalculatorDigitButton :digit="2" />
            <ScientificCalculatorDigitButton :digit="3" />
            <ScientificCalculatorOperationButton operation="addition" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-5 gap-2.5">
            <ScientificCalculatorOperationButton operation="log" />
            <ScientificCalculatorOperationButton operation="modulo" />
            <ScientificCalculatorDigitButton :digit="0" />
            <ScientificCalculatorConstantButton name="period" />
            <ScientificCalculatorFunctionButton name="eval" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
