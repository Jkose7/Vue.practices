<script setup>
import { ref } from 'vue';

const listOfTask = ref([
  {
    task: 'Correr',
    state: 'uncheck'
  },
])

const task = ref('')
const addTask = () => {
  listOfTask.value.push({
    task: task.value,
    state: 'uncheck',
  })
}

const checkTask = (task) => {
  listOfTask.value.find(t => t === task).state = 'check'
}

console.log(listOfTask.value)
</script>

<template>
  <main class="p-3 max-w-80 flex flex-col gap-3">
    <h1 class="text-xl font-bold">TO DO</h1>

    <div class="flex gap-3">
      <input type="text" v-model="task" class="w-full border-2">

      <button @click="addTask" class="bg-black px-2 rounded-sm text-white">
        add
      </button>
    </div>

    <section class="flex flex-col gap-3">
      <div v-for="task in listOfTask" :key="task.task"
        :class="`${task.state === 'check' ? `bg-green-300` : `bg-red-300`} p-2 rounded-sm flex justify-between `">
        <h1 class="text-xl">
          {{ task.task }}
        </h1>
        <div class="flex gap-2">
          <span @click="checkTask(task)" class="cursor-pointer">
            C
          </span>
          <span>
            D
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
