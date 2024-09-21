// Implement the Quick Sort algorithm.

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Expected output: [11, 12, 22, 25, 64]
