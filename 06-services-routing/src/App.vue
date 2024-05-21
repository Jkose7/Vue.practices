<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="flex w-full gap-5 justify-center text-red-400">
    <router-link :to="{name: 'home'}" class="hover:scale-110 transition-all">home</router-link>
    <router-link :to="{name: 'about'}" class="hover:scale-110 transition-all">about</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>

</style>
