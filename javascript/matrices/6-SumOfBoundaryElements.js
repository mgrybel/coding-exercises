// Calculate the sum of boundary elements in a matrix.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

// Calculate sum of boundary elements
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (
      i === 0 ||
      i === matrix.length - 1 ||
      j === 0 ||
      j === matrix[i].length - 1
    ) {
      sum += matrix[i][j];
    }
  }
}

console.log('The matrix:', matrix);
console.log('The sum of boundary elements:', sum);
