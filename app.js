const gameBoard = document.querySelector("#game");
const infoDisplay = document.querySelector("#info");
let board = ["", "", "", "", "", "", "", "", ""];

infoDisplay.textContent = "Circle goes first";
let go = "circle";

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createBoard() {
  board.forEach((_cell, index) => {
    const square = document.createElement("div");
    square.id = index;
    //square.textContent = index;
    square.classList.add("square");
    square.addEventListener("click", doGo);
    gameBoard.appendChild(square);
  });
}

function doGo(e) {
  const clickedSquare = e.target;
  const newPlay = document.createElement("div");
  newPlay.classList.add(go);
  clickedSquare.appendChild(newPlay);
  clickedSquare.removeEventListener("click", doGo);

  go = go === "circle" ? "cross" : "circle";

  infoDisplay.textContent = `It's ${go}'s turn`;

  checkWin();
}

function checkWin() {
  const squares = document.getElementsByClassName("square");
  //console.log(squares[0].firstChild.classList[0]);

  let circleWins = false;
  wins.forEach((w) => {
    if (w.every((pos) => squares[pos].firstChild?.classList[0] === "circle")) {
      circleWins = true;
    }
  });
  if (circleWins) {
    infoDisplay.textContent = "Circle Wins!";
    cleanBoard();
    displayReset();
  }

  let crossWins = false;
  wins.forEach((w) => {
    if (w.every((pos) => squares[pos].firstChild?.classList[0] === "cross")) {
      crossWins = true;
    }
  });
  if (crossWins) {
    infoDisplay.textContent = "cross Wins!";
    displayReset();
    cleanBoard();
  }

  if (!(circleWins || crossWins) && checkCompleted()) {
    displayReset();
    infoDisplay.textContent = "Tie!";
  }
}

function cleanBoard() {
  let squares = document.getElementsByClassName("square");

  //console.log(squares[0]);

  for (let i = 0; i < squares.length; i++) {
    squares[i] = squares[i].replaceWith(squares[i].cloneNode(true));
  }
}

function checkCompleted() {
  const squares = document.getElementsByClassName("square");

  for (let i = 0; i < squares.length; i++) {
    if (!squares[i].firstChild) {
      return false;
    }
  }

  return true;
}

function reset() {
  gameBoard.innerHTML = '';
  hideReset();
  createBoard();
  infoDisplay.textContent = "Circle goes first";
  go = 'circle';
}

function displayReset() {
  const btn = document.querySelector('#reset');
  btn.classList.remove('hidden');
  btn.classList.add('visible');
}

function hideReset() {
  const btn = document.querySelector('#reset');
  btn.classList.remove('visible');
  btn.classList.add('hidden');
}

createBoard();
