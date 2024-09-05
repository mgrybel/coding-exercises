// Write a program that reads a 3x3 matrix and calculates the average
// of the values present in the even positions (sum of the even indices) of the matrix.

const prompt = require('prompt-sync')({ sigint: true });

const matrix = [];
let sum = 0;
let count = 0;

// Fill matrix with user input
for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = parseInt(prompt(`Enter a value for matrix[${i}][${j}]: `));
    if ((i + j) % 2 === 0) {
      sum += matrix[i][j];
      count++;
    }
  }
}

// Calculate average of values at even positions
const average = count !== 0 ? sum / count : 0;

console.log('Matrix:', matrix);
console.log('The average of values at even positions:', average);
