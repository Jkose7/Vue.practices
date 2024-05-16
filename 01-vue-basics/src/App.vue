<script setup>
import { ref } from 'vue'
import Card from './components/Card.vue'

// UTILIZANDO LA COMPONENTS API

// Importaciones y logica de js -> parecido a Astro 
// v-blind -> unir abreviacion ':'
// v-(x) -> directivas 
// v-if condicional 
// v-else-if 
// v-else no cumple condicional 
// estas etiquetas deben estar seguidas unas a la otra para poder funcional 

// v-show oculta un elemento html solo visualmente 
// v-for itera sobre un objeto o array con la palabra 'in'

// dos objetos para uno para guardar un profesor 
// otro para guardarlos todos
const teachers = ref([])
const teacher = ref({
  name: '',
  lastName: '',
  documentation: false
})

// funcion para añadir profesor 
// nota -> siempre acceder al value exepto en el template 
const addTeacher = () => {
  teachers.value.push({...teacher.value})
  console.log(teachers.value)
}

</script>



<!-- v-model nos ayuda a bindear las variables con los inputs -->
<template>
  <form class="form">
    <label for="">Name</label>
    <input type="text" v-model="teacher.name">

    <label for="">LastName</label>
    <input type="text" v-model="teacher.lastName">


    <div class="checkbox">
      <label for="">Documentation</label>
      <input type="checkbox" v-model="teacher.documentation">
    </div>

    <button @click.prevent="addTeacher">send</button>
  </form>

  <div>
    <h1 v-if="teachers.lenght > 0">List of teachers</h1>
    <div v-for="te in teachers" :key="te.name">
      <Card
        :name="te.name"
        :lastName="te.lastName"
        :documentation="te.documentation"
      />
    </div>
  </div>

</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkbox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
