// Write a program that reads a number and prints
// the square root of the number on the screen.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a number
const userInput = parseFloat(prompt('Enter a number: '));

// Calculate the square root regardless of whether the input is valid
const squareRoot = Math.sqrt(userInput);

// Display the result
console.log(`The square root of ${userInput} is equal to ${squareRoot}`);
