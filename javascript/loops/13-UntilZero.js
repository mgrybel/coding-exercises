// Write a program that reads numbers from a user until zero is entered, and displays the average of the numbers entered.

const prompt = require('prompt-sync')({ sigint: true });

let sum = 0;
let count = 0;
let number = parseInt(prompt('Enter a number (or enter 0 to stop): '));

while (number !== 0) {
  sum += number;
  count++;
  number = parseInt(prompt('Enter a number (or enter 0 to stop): '));
}

if (count === 0) {
  console.log('No numbers were entered');
} else {
  const average = sum / count;
  console.log(`The average of the numbers entered is: ${average}`);
}
