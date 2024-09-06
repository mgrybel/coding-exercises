// Write a program that reads a 4x4 matrix and checks if it is
// a diagonal matrix, that is, if all elements outside
// the main diagonal are equal to zero.

const matrix = [
  [5, 0, 0, 0],
  [0, 8, 0, 0],
  [0, 0, 3, 0],
  [0, 0, 0, 2],
];

let isDiagonal = true;

// Check if it is a diagonal matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    if (i !== j && matrix[i][j] !== 0) {
      isDiagonal = false;
      break;
    }
  }
}

console.log('Matrix:', matrix);

if (isDiagonal) {
  console.log('It is a diagonal matrix.');
} else {
  console.log('It is not a diagonal matrix.');
}
