// Write a program that fills a 4x4 matrix with random numbers and
// displays the sum of the values present in each row and in each column.

function generateMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10); // Random integers between 0 and 9
    }
  }
  return matrix;
}

function sumRows(matrix) {
  return matrix.map((row) => row.reduce((acc, val) => acc + val, 0));
}

function sumColumns(matrix) {
  const cols = matrix[0].length;
  const sums = Array(cols).fill(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sums[i] += matrix[j][i];
    }
  }
  return sums;
}

const matrix = generateMatrix(4, 4);
console.log('Matrix:', matrix);

const rowSums = sumRows(matrix);
console.log('The sum of values in each row:', rowSums);

const colSums = sumColumns(matrix);
console.log('The sum of values in each column:', colSums);
