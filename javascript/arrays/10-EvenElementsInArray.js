// Create a program that reads an array of integers
// and checks if all elements are even.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

let allEven = true;

// Check if all elements are even
for (let i = 0; i < integers.length; i++) {
  if (integers[i] % 2 !== 0) {
    allEven = false;
    break;
  }
}

// Display the result
if (allEven) {
  console.log('All elements in the array are even.');
} else {
  console.log('Not all elements in the array are even.');
}
