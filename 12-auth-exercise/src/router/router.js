import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../store/auth";

import NotesView from "../views/NotesView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
    {
        path: '/',
        redirect: to => ({name: 'home'})
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/notes',
        name: 'notes',
        component: NotesView,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            requireAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) =>{
    const authRoute = to.meta.requireAuth
    const auth = useAuth()

    if(authRoute && !auth.token){
        next('login')
    }else{
        next()
    }
})

export default router