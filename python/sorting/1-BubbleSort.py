# The Bubble Sort algorithm

def bubble_sort(arr):
  n = len(arr)

  # Traverse through all array elements
  for i in range(n):

    # Last i elements are already in place
    for j in range(0, n - i - 1):

      # Swap if the element found is greater than the next elemnt
      if (arr[j] > arr[j + 1]):
        arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Test rhw bubble_sort function
arr = [64, 34, 25, 12, 22, 11, 90]
print("The original array:", arr)

bubble_sort(arr)

print("The sorted array:", arr)