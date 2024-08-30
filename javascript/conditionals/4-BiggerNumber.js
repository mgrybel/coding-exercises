// Write a program that reads two numbers and tells you which one is bigger.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));

if (num1 > num2) {
  console.log(`${num1} is bigger than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is bigger than ${num1}`);
} else {
  console.log('The numbers are equal.');
}
