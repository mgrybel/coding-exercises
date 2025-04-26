// Write a program that reads three numbers and
// checks if the sum is divisible by 5 or not.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));
const number3 = parseFloat(prompt('Enter the third number: '));

const sum = number1 + number2 + number3;

// Check if the sum of the three numbers is divisible by 5 and display the result
if (sum % 5 === 0) {
  console.log(
    `The sum of the three numbers is ${sum} and it is divisible by 5.`
  );
} else {
  console.log(
    `The sum of the three numbers is ${sum} and it is not divisible by 5.`
  );
}
