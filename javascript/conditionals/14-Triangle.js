// Write a program that reads three numbers and tells you if the numbers
// can be the sides of a triangle (the sum of two sides must always
// be greater than the third side).

const prompt = require('prompt-sync')({ sigint: true });

const side1 = parseFloat(prompt('Enter the length of side 1: '));
const side2 = parseFloat(prompt('Enter the length of side 2: '));
const side3 = parseFloat(prompt('Enter the length of side 3: '));

const canFormTriangle =
  side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;

// Display the result
if (canFormTriangle) {
  console.log('These numbers can form the sides of a triangle.');
} else {
  console.log('These numbers cannot form the sides of a triangle.');
}
