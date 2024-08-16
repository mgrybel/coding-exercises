// Given an array of random numbers, push all the 0s of the array
// to the end without changing the order of non-zero elements.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

let nonZeroIndex = 0;

// Move non-zero elements to the front of the array
for (let i = 0; i < integers.length; i++) {
  if (integers[i] !== 0) {
    integers[nonZeroIndex] = integers[i];
    nonZeroIndex++;
  }
}

// Fill the remaining elements with 0s
while (nonZeroIndex < integers.length) {
  integers[nonZeroIndex] = 0;
  nonZeroIndex++;
}

// Display the modified array
console.log(`The array after pushing 0s to the end: ${integers}`);
