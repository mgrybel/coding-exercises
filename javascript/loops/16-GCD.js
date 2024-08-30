// Write a program that determines the greates common divisor (GCD) between two numbers entered by the user.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseInt(prompt('Enter the first number: '));
const num2 = parseInt(prompt('Enter the second number: '));

let a = num1;
let b = num2;

while (b !== 0) {
  const temp = b;
  b = a % b;
  a = temp;
}

const gcd = a;

console.log(
  `The greatest common divisor (GCD) of ${num1} and ${num2} is: ${gcd}`
);
