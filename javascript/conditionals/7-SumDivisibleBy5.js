// Write a program that reads three numbers
// and checks if the sum is divisible by 5 or not.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const num3 = parseFloat(prompt('Enter the third number: '));

const sum = num1 + num2 + num3;

if (sum % 5 === 0) {
  console.log(
    `The sum of the three numbers is ${sum} and it is divisible by 5.`
  );
} else {
  console.log(
    `The sum of the three numbers is ${sum} and it is not divisible by 5.`
  );
}
