<script setup>
import { ref } from 'vue'
const dataUser = ref({
    email: '',
    password: ''
})

//Auth with traditional backend 
import AuthService from '../services/AuthService.js'
const authBackend = async () => {
    const auth = new AuthService
    const success = await auth.login(dataUser.value.email, dataUser.value.password)

    if (success) {
        console.log('true')
    } else {
        console.log('falso')
    }
}

//Auth with firebase 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const authFirebase = async () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, dataUser.value.email, dataUser.value.password)
        .then(() => {
            console.log('true')
        }).catch((err) => {
            console.log(err)
        })
}


//Auth social
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const googleAuth = new GoogleAuthProvider()

const authGoogle = async () => {
    const auth = getAuth()
    signInWithPopup(auth, googleAuth)
        .then(() => {
            console.log('true')
        }).catch(() => {
            console.log('false')
        })
}

</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold text-gray-900">
                Sign in
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-6">
            <form class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" v-model="dataUser.email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="dataUser.password"
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button @click.prevent="authFirebase"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>

            </form>
            <div class="w-full flex justify-between text-center items-center gap-4">
                <button class="w-full border-2 border-gray-400 text-gray-400 rounded-md py-1"
                    @click.prevent="authGoogle">Google</button>
                <button class="w-full border-2 border-gray-400 text-gray-400 rounded-md py-1"
                    @click.prevent="authGithub">GitHub</button>
                <button class="w-full border-2 border-gray-400 text-gray-400 rounded-md py-1"
                    @click.prevent="authFacebook">Facebook</button>
            </div>
        </div>
    </div>
</template>
