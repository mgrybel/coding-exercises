// Write a program that checks if an array contains duplicate elements.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

let containsDuplicate = false;

// Check for duplicate elements in the array
for (let i = 0; i < integers.length; i++) {
  for (let j = i + 1; j < integers.length; j++) {
    if (integers[i] === integers[j]) {
      containsDuplicate = true;
      break;
    }
  }
  if (containsDuplicate) {
    break;
  }
}

// Dsplay the result
if (containsDuplicate) {
  console.log('The array contains duplicate elements.');
} else {
  console.log('The array does not contain duplicate elements.');
}
