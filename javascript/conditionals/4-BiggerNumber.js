// Write a program that reads two numbers and tells you which one is bigger.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

if (number1 > number2) {
  console.log(`${number1} is bigger than ${number2}`);
} else if (number2 > number1) {
  console.log(`${number2} is bigger than ${number1}`);
} else {
  console.log('The numbers are equal.');
}
