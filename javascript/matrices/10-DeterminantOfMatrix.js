// Write a program that reads a 3x3 matrix and
// calculates the determinant of the matrix.

function determinant(matrix) {
  const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

// Example matrix
const matrix = [
  [2, -3, 1],
  [5, 4, 7],
  [0, 8, -6],
];

// Display the result
console.log('The matrix:', matrix);
console.log('The determinant:', determinant(matrix));
