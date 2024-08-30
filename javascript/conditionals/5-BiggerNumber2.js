// Write a program that reads two numbers and tells you which one is bigger.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

// Find the bigger number using the Marh.max function
const biggerNum = Math.max(num1, num2);

console.log(`${biggerNum} is the bigger number.`);
