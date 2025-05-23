// Write a program that asks the user for a number N
// and displays the sum of all numbers from 1 to N.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a number
const N = parseInt(prompt('Enter a number: '));

let sum = 0;

// Calculate the sum of numbers from 1 to N
for (let i = 1; i <= N; i++) {
  sum += i;
}

// Display the sum of numbers from 1 to N
console.log(`The sum of numbers from 1 to ${N} is: ${sum}`);
