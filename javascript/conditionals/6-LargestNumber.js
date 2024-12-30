// Write a program that asks the user for three numbers and displays the largest one.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));
const number3 = parseFloat(prompt('Enter the third number: '));

let largestNumber;

if (number1 >= number2 && number1 >= number3) {
  largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3) {
  largestNumber = number2;
} else {
  largestNumber = number3;
}

// Display the largest of the three numbers
console.log(`The largest number is ${largestNumber}`);
