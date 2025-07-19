# Write a recursive function to calculate the sum of elements of an array.

def vector_sum(vector):
  if len(vector) == 0:
    return 0
  else:
    return vector[0] + vector_sum(vector[1:])
  
# Example
print("The sum of elements in the array:", vector_sum([1, 2, 3]))