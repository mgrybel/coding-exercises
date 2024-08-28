// Write a program that reads an array of integers and displays the elements in reverse order.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Display the elements in reverse order
console.log(`Elements in reverse order: `);

for (let i = integers.length - 1; i >= 0; i--) {
  console.log(integers[i]);
}
