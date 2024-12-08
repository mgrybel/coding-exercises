// Print a matrix in spiral order.

function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const result = [];
  let rowStart = 0,
    rowEnd = matrix.length - 1;
  let colStart = 0,
    colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Print top row
    for (let i = colStart; i < colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    // Print right column
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    // Print bottom row (if any)
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    // Print left column (if any)
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }
  return result;
}

// Example matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Display the result
console.log('Spiral order:', spiralOrder(matrix));
