<script setup>
import { ref, computed } from 'vue'

const productos = ref([])
const producto = ref({
  nombre: '',
  precio: ''
})

const subTotal = computed(() => {
  const precioIVA = producto.value.precio * 1.19
  return precioIVA
})

const addToFactura = () => {
  productos.value.push(
    {
      ...producto.value
    }
  )

  producto.value = {
    nombre: '',
    precio: ''
  }

  console.log(productos.value)
}

</script>

<template>
  <div>

    <div>
      <h1>Nombre</h1>
      <input type="text" v-model="producto.nombre">
    </div>

    <div>
      <h1>Precio</h1>
      <input type="text" v-model="producto.precio">
    </div>
    <button @click="addToFactura">añadir a la factura</button>

    <div class="factura">
      <h1>Factura</h1>

      <div v-for="producto in productos" :key="producto.nombre">
        <h2>
          {{ producto.nombre }} : {{ producto.precio }}
        </h2>
      </div>

      {{ subTotal }}
    </div>

  </div>
</template>

<style scoped></style>
