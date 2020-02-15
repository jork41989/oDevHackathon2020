import Board from "./board"

document.addEventListener("DOMContentLoaded", function () {
  const gameDiv = document.getElementById("game")
  const board = new Board(gameDiv)
  board.start()
})