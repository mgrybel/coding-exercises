// Write a program that fills a 4x4 matrix
// with random values and displays the transposed matrix.

const matrix = [];
const transposedMatrix = [];

// fill atrix with random values
for (let i = 0; i < 4; i++) {
  matrix[i] = [];
  for (let j = 0; j < 4; j++) {
    matrix[i][j] = Math.floor(Math.random() * 10); // Random values from 0 to 9
  }
}

// Display the original matrix
console.log('Original matrix:');
console.log(matrix);

// Transpose the matrix
for (let i = 0; i < 4; i++) {
  transposedMatrix[i] = [];
  for (let j = 0; j < 4; j++) {
    transposedMatrix[i][j] = matrix[j][i];
  }
}

// Display the transposed matrix
console.log('\nTransposed matrix:');
console.log(transposedMatrix);
