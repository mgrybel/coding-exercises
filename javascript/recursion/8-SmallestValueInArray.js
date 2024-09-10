// Write a recursive function to find the smallest value in an array.

function findMin(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const subMin = findMin(arr.slice(1));
    return arr[0] < subMin ? arr[0] : subMin;
  }
}

// Example usage
const array = [10, 5, 8, 3, 7, 2];
console.log('The smallest element in the array is:', findMin(array)); // Expected output: 2
