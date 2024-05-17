<script setup>
defineProps({
    resetGame: Function,
})
</script>

<template>
    <main class="modal">
        <div
            class="h-36 w-1/2 bg-stone-50 font-bold flex flex-col text-black rounded-sm items-center justify-center gap-4">
            <h1 class="text-2xl">Winner:</h1>
            <slot name="Winner"></slot>

            <button 
            @click="resetGame" 
            class="bg-red-500 px-2 rounded-sm text-white"
            >
                reset game
            </button>
        </div>
    </main>
</template>

<style scoped>
.modal {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>