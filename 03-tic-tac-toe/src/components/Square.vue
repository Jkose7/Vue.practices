<script setup>
defineProps({
    updateBoard: Function,
    index: Number,
})
</script>

<template>
    <div @click="updateBoard(index)" class="w-24 h-24 bg-black grid place-items-center">
        <slot name="Square"></slot>
    </div>
</template>
