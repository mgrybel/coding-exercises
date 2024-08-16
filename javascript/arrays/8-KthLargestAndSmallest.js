// Given an array, find the kth largest and smallest element in it.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

const k = parseInt(prompt('Enter the value of k: '));

// Sort the array in ascending order
integers.sort((a, b) => a - b);

// Find the kth smallest and largest elements
const kthSmallest = integers[k - 1];
const kthLargest = integers[integers.length - k];

console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
console.log(`The ${k}th largest element in the array is: ${kthLargest}`);
