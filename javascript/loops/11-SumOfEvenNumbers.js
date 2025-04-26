// Write a program that calculates and displays
// the sum of even numbers from 1 to 100
// using a repeating loop.

let sum = 0;
let number = 2; // Starting from 2 as the first even number

while (number <= 100) {
  sum += number; // Add the current even number to the sum
  number += 2; // Move to the next even number
}

// Display the sum of even numbers from 1 to 100
console.log(`The sum of even numbers from 1 to 100 is: ${sum}`);
