<script setup>
import { useAuth } from '../store/auth';
const auth = useAuth()

</script>

<template>

    <h1>Login</h1>

    <h4>Email</h4>
    <input type="text" v-model="auth.email">

    <h4>Password</h4>
    <input type="text" v-model="auth.password">

    <button @click="auth.auth">login</button>
    {{ auth.token }}
</template>