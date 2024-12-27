# Write a program that reads an array of integers and
# checks if they are in ascending order

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Assume the array is in ascending order initially
is_ascending = True

# Check if the array is in ascending order
for i in range(1, n):
  if array[i] < array[i - 1]:
    is_ascending = False
    break

# Display the result
if is_ascending:
  print("The array is in ascending order.")
else:
  print("The array is not in ascending order.")