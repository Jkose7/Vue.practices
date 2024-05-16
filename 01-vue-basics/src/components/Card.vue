<script setup>
    defineProps({
        name: String,
        lastName: String,
        documentation: Boolean
    })
</script>

<template>
    <div class="card">
        <h1>{{ name }}</h1>
        <p>{{ lastName }}</p>
        <p>{{ documentation }}</p>
    </div>
</template>