<script>
export default {
    data() {
        return {
            frutas: [
                {
                    nombre: 'manzana',
                    stock: 2,
                },
                {
                    nombre: 'pera',
                    stock: 0
                }
            ],
            fruta: '',
            stock: '',
            total: 0
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.fruta,
                stock: this.stock,
            })
            console.log('fruta')
        }
    },
    computed: {
        sumarStock() {
            this.total = 0;
            for (const fruta of this.frutas) {
                this.total = this.total + fruta.stock
            }
            return this.total;
        }
    }
}

</script>

<template>

    <div class="form">
        <h4>
            Fruta
        </h4>
        <input type="text" v-model="fruta">
        <h4>
            Stock
        </h4>

        <form action="">
            <input type="number" v-model="stock">
            <button @click.prevent="agregarFruta" @keyup.enter="agregarFruta">agregar</button>
        </form>
        {{ fruta }}
    </div>

    <h4>Lista de frutas</h4>
    <div v-for="fruta in frutas" :key="fruta.nombre">
        <p>{{ fruta.nombre }} - {{ fruta.stock === 0 ? 'sin stock' : fruta.stock }}</p>
    </div>

    <h4>Total stock: {{ sumarStock }}</h4>
</template>

<style>
.form {
    display: flex;
    flex-direction: column;
}
</style>