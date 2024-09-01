// Given an array of integers, find all pairs in the array
// that sum up to a specified value.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

const targetSum = Number(prompt('Enter the target sum: '));

if (integers.length < 2) {
  console.log('The array should have at least 2 elements.');
} else {
  const pairs = [];

  for (let i = 0; i < integers.length; i++) {
    for (let j = i + 1; j < integers.length; j++) {
      if (integers[i] + integers[j] === targetSum) {
        pairs.push([integers[i], integers[j]]);
      }
    }
  }

  if (pairs.length === 0) {
    console.log('No pairs found with the target sum.');
  } else {
    console.log(`Pairs with the target sum ${targetSum}: `);
    pairs.forEach((pair) => console.log(pair));
  }
}
