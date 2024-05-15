<script setup>

import { ref, computed } from 'vue'

// Importaciones y logica de js -> parecido a Astro 
// v-blind -> unir abreviacion ':'
// v-(x) -> directivas 
// v-if condicional 
// v-else-if 
// v-else no cumple condicional 
// estas etiquetas deben estar seguidas unas a la otra para poder funcional 

// v-show oculta un elemento html solo visualmente 
// v-for itera sobre un objeto o array con la palabra 'in'

const counter = ref(0)
const favNumbers = ref([])

const addCounter = () => {
  counter.value += 1
}

const removeCounter = () => {
  counter.value -= 1
}

const resetCounter = () => {
  counter.value = 0
}

const addNumber = () => {
  favNumbers.value.push(counter.value)
}

const colorCounter = computed(() => {
  if (counter.value === 0) return'color:gray'

  return counter.value > 0 ? 'color:green' : 'color:red'
})

const isNumber = computed(() => {
  const number = favNumbers.value.find(num => num === counter.value)
  return number || number === 0
})

</script>

<template>
  <div class="counter" :style="colorCounter">
    {{ counter }}
  </div>
  <div class="container">
    <div>
      <button @click="addCounter"> + </button>
      <button @click="removeCounter"> - </button>
    </div>
    <button @click="resetCounter"> reset </button>
    <button @click="addNumber" :disabled="isNumber"> add </button>
  </div>

  <div class="list">
    <h1 v-for="number in favNumbers" :key="number">
      {{ number }}
    </h1>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c7;
  height: 50px;
  font-weight: 900;
  margin-bottom: 4px;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
}

.container div {
  display: flex;
  gap: 4px;
}

button {
  border: 0;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(.9);
    background-color: #c7c7c7
  }
}
</style>
