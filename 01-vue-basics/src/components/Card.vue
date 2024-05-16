<script setup>
// para definir las props se utiliza -> defineProps y se pone su tipo
defineProps({
    name: String,
    lastName: String,
    documentation: Boolean
})

</script>

<!-- luego podemos hacer la interpolacion normal -->
<template>
    <div class="card">
        <h1>{{ name }}</h1>
        <p>{{ lastName }}</p>
        <p>{{ documentation }}</p>
    </div>
</template>