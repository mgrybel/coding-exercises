// Implement the Bubble Sort algorithm.

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // A flag to optimize the sorting process
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop,
    // the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Expected output: [11, 12, 22, 25, 64]
