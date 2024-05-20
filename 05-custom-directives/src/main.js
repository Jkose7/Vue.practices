import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//crear directivas personalizadas
//en este caso la creamos sobre el app 

//definimos la directiva que se le pasan dos argumentos, el nombre y la funcion que realiza
app.directive('font-size', {
    //se puede montar en distintos momentos 
    //update - onMount - unMount - beforeMount
    //recibe el elemento y binding -> configuracion de la directiva 
    beforeMount: (el, binding) => {
        el.style.fontSize = '70px'
    }
})

/*directivas con value
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + "px"
    }
})
*/

//directiva con argumento
app.directive('custom-size', {
    beforeMount: (el, binding) => {

        let size = 18
        switch (binding.arg) {
            case 'sm': 
                size = 10
                break 
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
        }

        el.style.fontSize = size + "px"
    }
})


app.mount('#app')
