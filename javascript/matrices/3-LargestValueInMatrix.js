// Write a program that fills a 5x5 matrix with integers
// and displays the largest value in the matrix and its position.

const matrix = [];
let largestValue = -Infinity;
let largestValueRow = -1;
let largestValueCol = -1;

// fill matrix with random integers
for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = Math.floor(Math.random() * 100); // random integers between 0 and 99
    if (matrix[i][j] > largestValue) {
      largestValue = matrix[i][j];
      largestValueRow = i;
      largestValueCol = j;
    }
  }
}

// Display the original matrix
console.log('The original matrix:');
console.log(matrix);

// Display largest value and its position
console.log(
  `The largest value: ${largestValue} at position [${largestValueRow}][${largestValueCol}]`
);
