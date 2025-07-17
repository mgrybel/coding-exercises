# Write a recursive function to find the smallest value in an array.

def find_smallest(arr):
  # Base case: if the array has only one element,
  # return that element
  if len(arr) == 1:
    return arr[0]
  # Recursive case: compare the first element
  # with the smallest element in the rest of the array
  return min(arr[0], find_smallest(arr[1:]))

# Example
print("The smallest value in the array:", find_smallest([1,2,3,4,5]))