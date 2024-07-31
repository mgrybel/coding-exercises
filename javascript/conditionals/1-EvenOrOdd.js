// Write a program that reads a number
// and reports whether the number is even or odd.

const prompt = require('prompt-sync')({ sigint: true });

const num = parseInt(prompt('Enter a number: '));

// Check if the number is even or odd
if (num % 2 === 0) {
  console.log(`${num} is an even number.`);
} else {
  console.log(`${num} is an odd number.`);
}
