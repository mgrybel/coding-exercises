// Write a program that reads numbers from the user
// until a negative number is entered,
// and prints the sum of the positive numbers.

const prompt = require('prompt-sync')({ sigint: true });

let sum = 0;
let number = parseInt(
  prompt(`Enter a positive number (or enter a negative number to stop): `)
);

while (number >= 0) {
  sum += number;
  number = parseInt(
    prompt(`Enter a positive number (or enter a negative number to stop): `)
  );
}

console.log(`The sum of the positive numbers entered is: ${sum}`);
