// Write a program that reads two numbers,
// the first being the base and the second the exponent,
// and then prints the first number raised to the second.

const prompt = require('prompt-sync')({ sigint: true });

const base = parseFloat(prompt('Enter the base number: '));
const exponent = parseFloat(prompt('Enter the exponent: '));

// Calculate the result using the Math.pow() function
const result = Math.pow(base, exponent);

console.log(`${base} raised to the power of ${exponent} is equal to ${result}`);
