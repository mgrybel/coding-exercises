// Write a program that prompts the user for two numbers A and B
// and displays all numbers  between A and B.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for two numbers
const A = parseInt(prompt('Enter number A: '));
const B = parseInt(prompt('Enter number B: '));

console.log(`Numbers between ${A} and ${B}:`);

if (A < B) {
  for (let i = A + 1; i < B; i++) {
    console.log(i);
  }
} else {
  for (let i = B + 1; i < A; i++) {
    console.log(i);
  }
}
