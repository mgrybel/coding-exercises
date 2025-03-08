// Write a program that asks for a number
// and checks if it is divisible by 3 and 5 at the same time.

const prompt = require('prompt-sync')({ sigint: true });

const number = parseFloat(prompt('Enter a number: '));

// Check if the number is divisible by 3 and 5 at the same time and display the result
if (number % 3 === 0 && number % 5 === 0) {
  console.log(`${number} is divisible by both 3 and 5.`);
} else {
  console.log(`${number} is not divisible by both 3 and 5.`);
}
