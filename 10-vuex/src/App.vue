<script setup>
/*
OPTIONS API

import {defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex/dist/vuex.cjs.js';

export default defineComponent({
  name:'app',
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['counterDoble'])
  },
  methods: {
    ...mapMutations(['setCounter']),
    increment() {
      this.setCounter(this.counter + 1)
    }
  }
})
*/
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const counter = computed(() =>{
  return store.state.counter
})

const counterDoble = computed(() =>{
  return store.getters.counterDoble
})

const increment = () => {
  store.commit('setCounter', counter.value + 1)
}
</script>

<template>
  <h1>Counter vuex</h1>

  <div>
    <h1>{{ counter }} x 2 =  {{ counterDoble }}</h1>
    <button @click="increment">+</button>
  </div>

</template>

<style scoped>

</style>
