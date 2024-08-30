// Write a program that determines the lowest common multiple (LCM) between two numbers entered by the user.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseInt(prompt('Enter the first number: '));
const num2 = parseInt(prompt('Enter the second number: '));

let lcm;

let larger = num1 > num2 ? num1 : num2;

while (true) {
  if (larger % num1 === 0 && larger % num2 === 0) {
    lcm = larger;
    break;
  }
  larger++;
}

console.log(
  `The lowest common multiple (LCM) of ${num1} and ${num2} is: ${lcm}`
);
