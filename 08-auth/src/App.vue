<script setup>
</script>

<template>
  <main class="xl:mx-96">
    <nav class="w-full py-3 items-center text-lg font-bold flex gap-4">
      <router-link :to="({ name: 'home' })">Home</router-link>
      <router-link :to="({ name: 'login' })">Login</router-link>
    </nav>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
