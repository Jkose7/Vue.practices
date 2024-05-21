<script setup>
import PostService from '../services/service';
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


<template>
    <h1 class="text-xl font-semibold text-center">about page</h1>


    <div v-for="post in posts" :key="post.id" class="w-full flex items-center justify-center gap-2">
        <router-link 
        class="border w-full hover:bg-slate-200"
        :to="{ name: 'post', params: { id: post.id } }">
            {{ post.id }}. {{ post.title }}
        </router-link>
    </div>

</template>