// Write a program that reads an array of integers and finds the second largest element in the array.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Find the second largest element in the array
let firstMax = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < integers.length; i++) {
  if (integers[i] > firstMax) {
    secondMax = firstMax;
    firstMax = integers[i];
  } else if (integers[i] > secondMax && integers[i] !== firstMax) {
    secondMax = integers[i];
  }
}

// Check if a second largest element exists
if (secondMax !== -Infinity) {
  console.log(`The second largest element in the array is: ${secondMax}`);
} else {
  console.log('There is no second largest element in the array.');
}
