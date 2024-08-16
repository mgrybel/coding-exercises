// Given two sorted arrays, merge them into a single sorted array.

const prompt = require('prompt-sync')({ sigint: true });

const input1 = prompt('Enter sorted array 1 (integers separated by spaces): ');
const input2 = prompt('Enter sorted array 2 (integers separated by spaces): ');

const arr1 = input1.split(' ').map(Number);
const arr2 = input2.split(' ').map(Number);

let i = 0,
  j = 0;
const mergedArray = [];

// Merge the two sorted arrays
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    mergedArray.push(arr1[i]);
    i++;
  } else {
    mergedArray.push(arr2[j]);
    j++;
  }
}

// Add remaining elements from the first array
while (i < arr1.length) {
  mergedArray.push(arr1[i]);
  i++;
}

// Add remaining elements from the second array
while (j < arr2.length) {
  mergedArray.push(arr2[j]);
  j++;
}

console.log(`Merged sorted array: ${mergedArray}`);
