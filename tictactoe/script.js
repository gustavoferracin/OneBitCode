const nameContainer = document.querySelector("#nameContainer");
let board = []
const startBtn = document.querySelector("#startGame");
let playerTurn = ''

function updateName() {
  nameContainer.innerHTML = document.querySelector("[name=" + playerTurn + "]").value
}

function getWinRegions() {
  const winRegions = []
  if (board[0][0] && board[0][0] === board[0][1] && board[0][0] === board[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (board[1][0] && board[1][0] === board[1][1] && board[1][0] === board[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (board[2][0] && board[2][0] === board[2][1] && board[2][0] === board[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (board[0][0] && board[0][0] === board[1][0] && board[0][0] === board[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (board[0][1] && board[0][1] === board[1][1] && board[0][1] === board[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (board[0][2] && board[0][2] === board[1][2] && board[0][2] === board[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function handleWin(regions) {
  regions.forEach(function (region) {
  document.querySelector('[data-mark="' + region + '"]').classList.add('win')
  document.querySelector("h2").innerHTML = "Vitória de: " + document.querySelector("[name=" + playerTurn + "]").value
  })
}

function startGame() {
  const gameTable = document.querySelector(".board");
  const field = document.querySelectorAll(".card");
  board = [['','',''], ['','',''], ['','','']]
  playerTurn = "P1"
  nameContainer.innerHTML = document.querySelector("[name=" + playerTurn + "]").value
  field.forEach(element => {
    element.classList.remove("win")
    element.innerHTML = ''
    element.addEventListener('click', handleBoardClick)
  })
}

function handleBoardClick(ev) {
    ev.currentTarget.innerHTML = playerTurn === "P1" ? "X" : "O"
    ev.currentTarget.removeEventListener("click",handleBoardClick)
    let rowColumn = ev.currentTarget.dataset.mark.split(".")
    let row = rowColumn[0]
    let coloumn = rowColumn[1]
    board[row][coloumn] = playerTurn === "P1" ? "X" : "O"
    console.clear()
    console.table(board)
    
    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
      handleWin(winRegions)
    } else if (board.flat().includes('')) {
      playerTurn = playerTurn === "P1"  ? "P2"  : "P1"
      updateName()
    } else {
      document.querySelector('h2').innerHTML = 'Empate!'
    }
}


startBtn.addEventListener("click", startGame)