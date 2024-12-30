// Write a program that reads two numbers and tells you which one is bigger.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

// Find the bigger number using the Marh.max function
const biggerNumber = Math.max(number1, number2);

// Display the bigger of the two numbers
console.log(`${biggerNumber} is the bigger number.`);
