// Write a program that prompts the user
// for a number and displays its divisors.

const prompt = require('prompt-sync')({ sigint: true });

const number = parseInt(prompt('Enter a number: '));

console.log(`The divisors of ${number} are:`);

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
