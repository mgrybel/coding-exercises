// Write a program that reads an array of integers
// and displays the sum of all elements.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Calculate the sum of elements in the array
let sum = 0;
for (let i = 0; i < integers.length; i++) {
  sum += integers[i];
}

console.log(`The sum of all elements is: ${sum}`);
