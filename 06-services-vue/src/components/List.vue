<script setup>
import PostService from '../../services/service'
import { onMounted } from 'vue';

const service = new PostService()
const posts = service.getPost()

onMounted(async () => {
    await service.fetchAll()
})

console.log(posts.value)

</script>

<template>
    <div>List of services</div>
    <div v-for="post in posts" :key="post.id">
        {{ post.title }}
    </div>
</template>

<style></style>