// Write a program that reads two matrices and returns the multiplication
// between them as an answer. The program should observe whether or not it is
// possible to perform the multiplication between the two matrices.

const prompt = require('prompt-sync')({ sigint: true });

function matrixMultiplication(matrix1, matrix2) {
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const rows2 = matrix2.length;
  const cols2 = matrix2[0].length;

  if (cols1 !== rows2) {
    return 'Matrix multiplication not possible: Invalid dimensions.';
  }

  const result = [];
  for (let i = 0; i < rows1; i++) {
    result[i] = [];
    for (let j = 0; j < cols2; j++) {
      let sum = 0;
      for (let k = 0; k < cols1; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function createMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      const value = parseInt(prompt(`Enter a value for matrix[${i}][${j}]: `));
      matrix[i][j] = isNaN(value) ? 0 : value;
    }
  }
  return matrix;
}

const rows1 = parseInt(prompt('Enter the number of rows for matrix 1: '));
const cols1 = parseInt(prompt('Enter the number of columns for matrix 1: '));
const rows2 = parseInt(prompt('Enter the number of rows for matrix 2: '));
const cols2 = parseInt(prompt('Enter the number of columns for matrix 2: '));

const matrix1 = createMatrix(rows1, cols1);
const matrix2 = createMatrix(rows2, cols2);

console.log('Matrix 1:', matrix1);
console.log('Matrix 2:', matrix2);

const resultMatrix = matrixMultiplication(matrix1, matrix2);

if (typeof resultMatrix === 'string') {
  console.log(resultMatrix);
} else {
  console.log('The result of matrix multiplication:', resultMatrix);
}
