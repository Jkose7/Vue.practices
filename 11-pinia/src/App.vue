<script setup>
import { useCounterStore } from './store/store';
const counterStore = useCounterStore()


</script>

<template>
  <h1>Pinia counter</h1>
  <h3>{{ counterStore.counter }} x 2 = {{ counterStore.counterDouble }}</h3>
  <button @click="counterStore.increment()">increment</button>
</template>

<style scoped>

</style>
