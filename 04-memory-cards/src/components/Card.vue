<script setup>
import { ref } from 'vue';

const item = ref(false)
const showItem = () => {
    item.value = true
}

</script>

<template>
    <div @click="showItem" class="bg-white h-32 w-32 flex items-center justify-center rounded-sm cursor-pointer">
        <slot v-if="item" name="item"></slot>
    </div>
</template>
