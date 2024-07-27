// Write a program that asks the user for three numbers
// and displays the largest one.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const num3 = parseFloat(prompt('Enter the third number: '));

let largestNum;

if (num1 >= num2 && num1 >= num3) {
  largestNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNum = num2;
} else {
  largestNum = num3;
}

console.log(`The largest number is ${largestNum}`);
