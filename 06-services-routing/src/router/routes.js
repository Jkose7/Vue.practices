import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PostView from "../views/PostView.vue";

const routes = [
    {
        path: '/',
        redirect: to => {return {name: 'about'}}
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/about/:id',
        name: 'post',
        component: PostView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router