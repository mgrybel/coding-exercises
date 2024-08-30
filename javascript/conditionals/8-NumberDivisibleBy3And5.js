// Write a program that asks for a number and checks if it is divisible by 3 and 5 at the same time.

const prompt = require('prompt-sync')({ sigint: true });

const num = parseFloat(prompt('Enter a number: '));

if (num % 3 === 0 && num % 5 === 0) {
  console.log(`${num} is divisible by both 3 and 5.`);
} else {
  console.log(`${num} is not divisible by both 3 and 5.`);
}
