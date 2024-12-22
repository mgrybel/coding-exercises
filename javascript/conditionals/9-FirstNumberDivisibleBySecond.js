// Write a program that asks for two numbers
// and checks if the first number is divisible by the second number.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));

if (number1 !== 0 && number1 % number2 === 0) {
  console.log(`${number1} is divisible by ${number2}`);
} else {
  console.log(`${number1} is  not divisible by ${number2}`);
}
