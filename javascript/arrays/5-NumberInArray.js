// Write a program that reads an array of integers
// and displays how many times a specific number
// appears in the array.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');

const integers = input.split(' ').map(Number);

// Read a specific number to count occurrences
const numberToFind = parseInt(prompt('Enter a number to find: '));

// Count occurrences of the specific number in the array
let count = 0;
for (let i = 0; i < integers.length; i++) {
  if (integers[i] === numberToFind) {
    count++;
  }
}

console.log(
  `The number ${numberToFind} appears ${count} time(s) in the array.`
);
