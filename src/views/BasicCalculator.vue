<script setup lang="ts">
  import PageHeader from '../components/PageHeader.vue'
  import BasicCalculatorDigitButton from '../components/basicCalculator/BasicCalculatorDigitButton.vue'
  import BasicCalculatorArithmeticButton from '../components/basicCalculator/BasicCalculatorArithmeticButton.vue'
  import BasicCalculatorButtons from '../components/basicCalculator/BasicCalculatorButtons.vue'
</script>

<template>
  <PageHeader title="Basic Calculator" />
  <main class="min-h-[80vh] w-full px-4 py-8 lg:py-12 xl:py-16">
    <section class="mx-auto w-full max-w-screen-sm">
      <section class="h-full w-full rounded-sm">
        <div class="bg-gray-900">
          <div class="w-full p-2.5">
            <span
              class="space-grotesk-500 mx-auto inline-block w-full cursor-default text-right text-base font-semibold"
              id="calculator-historyOperation"
              data-testid="calculator-historyOperation"
            >
              0
            </span>
          </div>
          <div class="w-full p-4">
            <span
              class="space-grotesk-500 inline-block w-full cursor-default overflow-auto text-right text-lg font-bold"
              style="scrollbar-width: none"
              id="calculator-currentOperand"
              data-testid="calculator-currentOperand"
            >
              0
            </span>
          </div>
        </div>
        <div class="space-grotesk-500 mt-4 grid grid-rows-5 gap-2.5">
          <div aria-label="row_five" class="grid grid-cols-4 gap-2.5">
            <BasicCalculatorButtons operation="clear-all" />
            <BasicCalculatorButtons operation="clear" />
            <BasicCalculatorButtons operation="delete" />
            <BasicCalculatorArithmeticButton operation="division" />
          </div>
          <div aria-label="row_four" class="grid grid-cols-4 gap-2.5">
            <BasicCalculatorDigitButton :digit="7" />
            <BasicCalculatorDigitButton :digit="8" />
            <BasicCalculatorDigitButton :digit="9" />
            <BasicCalculatorArithmeticButton operation="multiplication" />
          </div>
          <div aria-label="row_three" class="grid grid-cols-4 gap-2.5">
            <BasicCalculatorDigitButton :digit="4" />
            <BasicCalculatorDigitButton :digit="5" />
            <BasicCalculatorDigitButton :digit="6" />
            <BasicCalculatorArithmeticButton operation="subtraction" />
          </div>
          <div aria-label="row_two" class="grid grid-cols-4 gap-2.5">
            <BasicCalculatorDigitButton :digit="1" />
            <BasicCalculatorDigitButton :digit="2" />
            <BasicCalculatorDigitButton :digit="3" />
            <BasicCalculatorArithmeticButton operation="addition" />
          </div>
          <div aria-label="row_one" class="grid grid-cols-4 gap-2.5">
            <BasicCalculatorButtons operation="plus-minus" />
            <BasicCalculatorDigitButton :digit="0" />
            <BasicCalculatorButtons operation="period" />
            <BasicCalculatorButtons operation="eval" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
