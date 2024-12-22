// Write a program that reads a number and reports
// whether the number is positive, negative, or zero.

const prompt = require('prompt-sync')({ sigint: true });

const number = parseFloat(prompt('Enter a number: '));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log(`${number} is a positive number.`);
} else if (number < 0) {
  console.log(`${number} is a negative number.`);
} else {
  console.log(`${number} is zero.`);
}
