// Write a program that determines the greates common divisor (GCD)
// between two numbers entered by the user.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for two numbers
const number1 = parseInt(prompt('Enter the first number: '));
const number2 = parseInt(prompt('Enter the second number: '));

let a = number1;
let b = number2;

while (b !== 0) {
  const temp = b;
  b = a % b;
  a = temp;
}

const gcd = a;

console.log(
  `The greatest common divisor (GCD) of ${number1} and ${number2} is: ${gcd}`
);
