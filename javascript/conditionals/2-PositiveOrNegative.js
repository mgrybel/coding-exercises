// Write a program that reads a number and reports
// whether the number is positive, negative, or zero.

const prompt = require('prompt-sync')({ sigint: true });

const num = parseFloat(prompt('Enter a number: '));

// Check if the number is positive, negative, or zero
if (num > 0) {
  console.log(`${num} is a positive number.`);
} else if (num < 0) {
  console.log(`${num} is a negative number.`);
} else {
  console.log(`${num} is zero.`);
}
