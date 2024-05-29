import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { app as initializeApp} from './providers/firebase'

import { createPinia } from 'pinia'
const pinia = createPinia()

//initialize firebase 
initializeApp()

//initialize project vue
createApp(App).use(pinia).use(router).mount('#app')
