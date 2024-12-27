// Write a program that reads an arrays of integers
// and displays the average of the elements.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Calculate the average of elements in the array
let sum = 0;

for (let i = 0; i < integers.length; i++) {
  sum += integers[i];
}

const average = sum / integers.length;

// Display the average of all elements
console.log(`The average of all elements is: ${average}`);
