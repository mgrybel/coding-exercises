// Write a program that reads two 2x2 matrices and displays
// the sum of the two matrices.

function matrixSum(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

// Example matrices
const matrix1 = [
  [2, 3],
  [4, 5],
];

const matrix2 = [
  [1, 2],
  [3, 4],
];

console.log('Matrix 1:', matrix1);
console.log('Matrix 2:', matrix2);

const resultMatrix = matrixSum(matrix1, matrix2);
console.log('The sum of the matrices:', resultMatrix);
