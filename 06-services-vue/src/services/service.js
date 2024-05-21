import { ref } from 'vue'

//creamos la clase PostService donde haremos el fetch
class PostService {
    //definimos los posts
    posts 

    //inicializamos post en una referencia como un array vacio
    constructor (){
        this.posts = ref([])
    }
    
    //creamos la funcion que accede a los post 
    getPost() {
        return this.posts
    }

    //creamos la funcion que realiza el fetch
    async fetchAll() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const data = await response.json()

            //al valor del post le asignamos la respuesta de data
            this.posts.value = await data

        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService