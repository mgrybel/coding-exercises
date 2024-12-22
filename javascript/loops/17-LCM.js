// Write a program that determines the lowest common multiple (LCM)
// between two numbers entered by the user.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseInt(prompt('Enter the first number: '));
const number2 = parseInt(prompt('Enter the second number: '));

let lcm;

let larger = number1 > number2 ? number1 : number2;

while (true) {
  if (larger % number1 === 0 && larger % number2 === 0) {
    lcm = larger;
    break;
  }
  larger++;
}

console.log(
  `The lowest common multiple (LCM) of ${number1} and ${number2} is: ${lcm}`
);
