// Write a program that fills a 3x3 matrix with values entered by the user
// and displays the sum of the main diagonal values.

const prompt = require('prompt-sync')({ sigint: true });

const matrix = [];
let sum = 0;

// Prompt a user for matrix values
for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = parseInt(prompt(`Enter a value for matrix[${i}][${j}]: `));
    if (i === j) {
      sum += matrix[i][j]; // Add values on the main diagonal
    }
  }
}

// display matrix and sum of main diagonal
console.log('Matrix:', matrix);
console.log('The sum of main diagonal values:', sum);
