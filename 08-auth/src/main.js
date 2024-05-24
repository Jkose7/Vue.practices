import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/routes";
import { app as initializeFirebase } from "./providers/firebase"

//Inicializar firebase 
initializeFirebase()

//Inicializar vue app
createApp(App).use(router).mount("#app");
