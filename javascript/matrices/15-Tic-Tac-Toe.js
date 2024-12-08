// Write a function that receives a 3x3 matrix representing the game of
// tic-tac-toe, and check if there is a winner, if there is a tie,
// or if the game is not over yet.

function checkTicTacToe(matrix) {
  // Check rows, columns, and diagonals for a winner
  for (let i = 0; i < 3; i++) {
    if (
      matrix[i][0] !== 0 &&
      matrix[i][0] === matrix[i][1] &&
      matrix[i][0] === matrix[i][2]
    ) {
      return `Player ${matrix[i][0]} wins!`;
    }

    if (
      matrix[0][i] !== 0 &&
      matrix[0][i] === matrix[1][i] &&
      matrix[0][i] === matrix[2][i]
    ) {
      return `Player ${matrix[0][i]} wins!`;
    }
  }

  if (
    matrix[0][0] !== 0 &&
    matrix[0][0] === matrix[1][1] &&
    matrix[0][0] === matrix[2][2]
  ) {
    return `Player ${matrix[0][0]} wins!`;
  }

  if (
    matrix[0][2] === 0 &&
    matrix[0][2] === matrix[1][1] &&
    matrix[0][2] === matrix[2][0]
  ) {
    return `Player ${matrix[0][2]} wins!`;
  }

  // Check for a tie or game still in progress
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] === 0) {
        return 'Game is still in progress';
      }
    }
  }
  return 'It is a tie!';
}

// Example 3x3 matrix representing tic-tac-toe game
const game1 = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

const game2 = [
  [1, 0, 1],
  [0, 1, 0],
  [0, 1, 0],
];

// Display the result
console.log(checkTicTacToe(game1)); // Player 1 wins!
console.log(checkTicTacToe(game2)); // It is a tie!
