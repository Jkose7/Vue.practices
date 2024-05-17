<script setup>

import { computed, ref } from 'vue'

import Square from './components/Square.vue';
import { TURNS } from './const.js';
import { endCheckGame, winnerCheck } from './logic/board.js';
import WinnerModal from './components/WinnerModal.vue';
import conffetti from 'canvas-confetti'

let board = ref(Array(9).fill(null))
let turn = ref(TURNS.x)
let winner = ref(null)


const resetGame = () => {
  board.value = Array(9).fill(null)
  turn.value = TURNS.x
  winner.value = null

  localStorage.removeItem('turn')
  localStorage.removeItem('board')
}

const updateBoard = (index) => {
  //comprobar que no se cambie la misma posicion
  if (board.value[index]) return

  //actualizar tablero
  const newBoard = [...board.value]
  newBoard[index] = turn.value
  board.value = newBoard

  //actualizar turno
  const newTurn = turn.value === TURNS.x ? TURNS.o : TURNS.x
  turn.value = newTurn

  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)

  //comprobar si hay un ganador
  const newWinner = winnerCheck(newBoard)
  if (newWinner) {
    winner.value = newWinner
    conffetti()
  } else if (endCheckGame(newBoard)) {
    winner.value = false
    resetGame()
  }

}

</script>

<template>
  <main class="flex flex-col text-white justify-center items-center w-fit gap-6">
    <h1 class="text-3xl font-extrabold">Triqui</h1>
    <section class="game">
      <Square v-for="(value, index) in board" :key="index" :index="index" :updateBoard="updateBoard">
        <template #Square>
          {{ value }}
        </template>
      </Square>
    </section>

    <section class="flex flex-col items-center">
      <Square v-if="turn === TURNS.x">
        <template #Square>
          {{ turn }}
        </template>
      </Square>

      <Square v-if="turn === TURNS.o">
        <template #Square>
          {{ turn }}
        </template>
      </Square>

      <h1 class="font-extrabold">turn</h1>
    </section>


    <WinnerModal v-if="winner" :resetGame="resetGame">
      <template #Winner>
        {{ winner }}
      </template>
    </WinnerModal>

    <button @click="resetGame" class="bg-red-500 text-white rounded-sm px-2 py-1 font-bold">reset game</button>
  </main>
</template>

<style scoped>
.game {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}
</style>
