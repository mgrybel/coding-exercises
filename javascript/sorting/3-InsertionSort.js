// Implement the Insertion Sort algorithm.

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0...i-1] that are greater than
    // the current one to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Expected output: [11, 12, 22, 25, 64]
