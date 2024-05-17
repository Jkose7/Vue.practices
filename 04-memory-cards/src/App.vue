<script setup>
import { computed, ref } from 'vue';
import Card from './components/Card.vue';

const ITEMS = {
  1: '🍕',
  2: '🧀',
  3: '🥩',
  4: '🍥',
  5: '🍩',
  6: '🍕',
  7: '🧀',
  8: '🥩',
  9: '🍥',
  10: '🍩',
  11: '🥨',
  12: '🥨',
}

const board = ref(ITEMS)
let firstCard = ref('')
let secondCard = ref('')
let clicks = ref(0)
let score = ref(0)

const isCard = (value) => {
  clicks.value++

  if (clicks.value === 1) {
    firstCard.value = value
  }

  if (clicks.value === 2) {
    secondCard.value = value
  }

  if (firstCard.value === secondCard.value && clicks.value === 2) {
    score.value++
    firstCard.value = ''
    secondCard.value = ''
    clicks.value = 0
  }

  console.log([firstCard.value, secondCard.value, clicks.value])
}

</script>

<template>
  <main class="w-full flex flex-col items-center justify-center gap-5 text-white">
    <div>
      <h1 class="text-red-300">Memory Card</h1>
      <h1 class="">score {{ score }}</h1>
    </div>

    <div class="board" @click="counterClicks">
      <Card v-for="(value, index) in board" :key="index" @Click="isCard(value)">
        <template #item>
          <h1 class="text-7xl">
            {{ value }}
          </h1>
        </template>
      </Card>
    </div>

  </main>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
}
</style>
