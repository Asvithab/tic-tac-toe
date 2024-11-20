const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-btn');
let currentPlayer = 'X';
let board = Array(9).fill(null);


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`${currentPlayer} wins!`);
      return true;
    }
  }
  if (!board.includes(null)) {
    alert('It\'s a draw!');
    return true;
  }
  return false;
}


cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.getAttribute('data-index');
    if (!board[index]) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add('taken');
      if (checkWinner()) {
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function resetGame() {
  board.fill(null);
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
  currentPlayer = 'X';
}

resetButton.addEventListener('click', resetGame);
