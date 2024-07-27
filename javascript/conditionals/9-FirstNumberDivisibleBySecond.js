// Write a program that asks for two numbers
// and checks if the first number is divisible by the second number.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseInt(prompt('Enter the first number: '));
const num2 = parseInt(prompt('Enter the second number: '));

if (num1 !== 0 && num1 % num2 === 0) {
  console.log(`${num1} is divisible by ${num2}`);
} else {
  console.log(`${num1} is  not divisible by ${num2}`);
}
