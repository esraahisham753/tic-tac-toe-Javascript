const gameBoard = document.querySelector('#game');
const infoDisplay = document.querySelector('#info');
let board = ['', '', '', '', '', '', '', '', ''];

infoDisplay.textContent = 'Circle goes first';
let go = 'circle';

function createBoard() {
    board.forEach((_cell, index) => {
        const square = document.createElement('div');
        square.id = index;
        square.classList.add('square');
        square.addEventListener('click', doGo);
        gameBoard.appendChild(square);
    });
}

function doGo(e) {
    const clickedSquare = e.target;
    const newPlay = document.createElement('div');
    newPlay.classList.add(go);
    clickedSquare.appendChild(newPlay);

    
    
}



createBoard();