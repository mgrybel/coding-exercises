// Count negative numbers in a matrix.

const matrix = [
  [2, -3, 5, 0],
  [-7, 8, -1, 4],
  [6, 0, -9, 10],
  [-12, -15, 17, 20],
];

const negativeCount = 0;

// Count negative numbers in the matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] < 0) {
      negativeCount++;
    }
  }
}

// Display the number of negative numbers in the matrix
console.log('The number of negative numbers in the matrix:', negativeCount);
