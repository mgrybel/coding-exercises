// Write a program that reads an array of integers
// and displays the largest element in the array.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Find the largest element in the array
let largest = integers[0];
for (let i = 1; i < integers.length; i++) {
  if (integers[i] > largest) {
    largest = integers[i];
  }
}

// Display the largest element in the array
console.log(`The largest element in the array is: ${largest}`);
