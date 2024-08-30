// Write a program that calculates the arithmetic mean of three numbers entered by the user.

const prompt = require('prompt-sync')({ sigint: true });

const firstNumber = parseFloat(prompt('Enter the first number: '));
const secondNumber = parseFloat(prompt('Enter the second number: '));
const thirdNumber = parseFloat(prompt('Enter the third number: '));

// Calculate the arithmetic mean
const mean = (firstNumber + secondNumber + thirdNumber) / 3;

console.log(
  `The arithmetic mean of ${firstNumber}, ${secondNumber}, and ${thirdNumber} is ${mean}.`
);
