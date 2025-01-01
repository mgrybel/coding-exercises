// Write a program that prompts the user for a list of numbers until the user types 0,
// and displays the largest and smallest numbers on the list.

const prompt = require('prompt-sync')({ sigint: true });

let largest = Number.MIN_VALUE;
let smallest = Number.MAX_VALUE;
let number = parseInt(prompt('Enter a number (or enter 0 to stop): '));

while (number !== 0) {
  if (number > largest) {
    largest = number;
  }

  if (number < smallest) {
    smallest = number;
  }

  number = parseInt(prompt('Enter a number (or enter 0 to stop): '));
}

// Display the largest and smallest numbers on the list
if (largest === Number.MIN_VALUE && smallest === Number.MAX_VALUE) {
  console.log('No numbers were entered');
} else {
  console.log(`The largest number entered is: ${largest}`);
  console.log(`The smallest number entered is: ${smallest}`);
}
