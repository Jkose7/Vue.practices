<script setup>
import PostService from '../services/service'

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

//creamos una nueva clase del PostService 
const service = new PostService()
//usamos la funcion que obtiene los post 
const post = service.getOnePost()

//al montarse el componente realizamos la 
//funcion fetch de la clase
onMounted(async () => {
    const route = useRoute()
    let id = route.params.id
    await service.fetchId(id)
})

console.log(post.value)


</script>

<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>