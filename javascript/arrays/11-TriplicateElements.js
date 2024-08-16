// Write a program that checks if an array contains triplicate elements.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

let containsTriplicate = false;
const frequency = {};

// Count the frequency of each element in the array
for (let i = 0; i < integers.length; i++) {
  if (frequency[integers[i]]) {
    frequency[integers[i]]++;
  } else {
    frequency[integers[i]] = 1;
  }
}

// Check if any element appears three times
for (const key in frequency) {
  if (frequency[key] >= 3) {
    containsTriplicate = true;
    break;
  }
}

// Display the result
if (containsTriplicate) {
  console.log('The array contains triplicate elements');
} else {
  console.log('The array does not contain triplicate elements');
}
