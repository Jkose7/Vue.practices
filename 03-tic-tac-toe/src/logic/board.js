import { WINNER } from '../const.js'

export const winnerCheck = (board) => {

    //dependiendo los combos 
    //comprobamos posicion por posicion si existe un combo igual 
    //y devolvemos el ganador
    for (const combo of WINNER) {
        const [a, b, c] = combo
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a]
        }

        console.log(combo)
    }

    return null
}

export const endCheckGame = (board) => {
    //comprobar caso de empate 
    //que todas las casillas esten llenas
    //terminar juego

    return board.every(square => square !== null)
}