// write a program to determine whether a given matrix is symmetric.

function isSymmetric(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Check if matrix is square
  if (rows !== cols) {
    return false;
  }

  // Check if it is symmetric
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }

  return true;
}

// Example matrix
const matrix = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6],
];

console.log('The matrix:', matrix);

if (isSymmetric(matrix)) {
  console.log('The matrix is symmetric.');
} else {
  console.log('The matrix is not symmetric');
}
