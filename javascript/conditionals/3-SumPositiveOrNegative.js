// Write a program that reads three numbers
// and checks if their sum is positive, negative, or equal to zero.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const num3 = parseFloat(prompt('Enter the third number: '));

// Calculate the sum of the three numbers
const sum = num1 + num2 + num3;

// Check if the sum is positive, negative, or zero
if (sum > 0) {
  console.log(
    `The sum of the three numbers is equal to ${sum}, and it is a positive number.`
  );
} else if (sum < 0) {
  console.log(
    `The sum of the three numbers is equal to ${sum}, and it is a negative number.`
  );
} else {
  console.log(
    `The sum of the three numbers is equal to ${sum}, and it is zero.`
  );
}
