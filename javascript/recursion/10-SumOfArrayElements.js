// Write a recursive function to calculate
// the sum of elements of an array.

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arraySum(arr.slice(1));
  }
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log('The sum of elements in the array:', arraySum(array)); // Expected output: 15
