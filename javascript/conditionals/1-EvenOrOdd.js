// Write a program that reads a number and reports whether the number is even or odd.

const prompt = require('prompt-sync')({ sigint: true });

const number = parseFloat(prompt('Enter a number: '));

// Check if the number is even or odd and display the result
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}
