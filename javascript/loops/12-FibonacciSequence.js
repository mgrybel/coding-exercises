// Write a program that asks the user for a number
// and displays the Fibonacci sequence up to the given number
// using a repeating loop.

/**
 * The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The next number is found by adding up the two numbers before it: the 2 is found by adding the two numbers before it (1+1),;
 * the 3 is found by adding the two numbers before it (1+2),; the 5 is (2+3),; and so on.
 */

const prompt = require('prompt-sync')({ sigint: true });

const limit = parseInt(
  prompt('Enter a number to generate the Fibonacci sequence: ')
);

let a = 0,
  b = 1;
let result = '';

while (a <= limit) {
  result += a + ' ';
  const temp = a + b;
  a = b;
  b = temp;
}

console.log(`The Fibonacci sequence up to ${limit} is: ${result}`);
