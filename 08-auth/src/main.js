import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./routes/routes";

import VueCookies from "vue-cookies"
import VueSession from 'vue-session'

import { app as initializeFirebase } from "./providers/firebase"

//Inicializar firebase 
initializeFirebase()

//Inicializar vue app
createApp(App).use(VueCookies, {
    expires: "1d",
    path: "/",
    //domain: "",
    //secure: "",f
    //sameSite: ""
}).use(router).mount("#app");
