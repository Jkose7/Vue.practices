<script setup>
import PostService from '../services/service'
import { onMounted } from 'vue';

//creamos una nueva clase del PostService 
const service = new PostService()

//usamos la funcion que obtiene los post 
const posts = service.getPost()

//al montarse el componente realizamos la 
//funcion fetch de la clase
onMounted(async () => {
    await service.fetchAll()
})

console.log(posts.value)

</script>

<!-- recorremos los post y los mostramos por pantalla -->
<template>
    <div>List of services</div>
    <div v-for="post in posts" :key="post.id">
        {{ post.title }}
    </div>
</template>

<style></style>