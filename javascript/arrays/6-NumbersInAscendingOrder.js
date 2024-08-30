// Write a program that reads an array of integers and checks if they are in ascending order.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const integers = input.split(' ').map(Number);

// Function to check if the array is in the ascending order
function isAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Check if the array is in the ascending order and display the result
if (isAscending(integers)) {
  console.log('The array is in the ascending order.');
} else {
  console.log('The array is not in the ascending order.');
}
