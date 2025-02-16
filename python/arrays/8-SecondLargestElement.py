# Create a program that reads an array of integers and finds
# the second largest element in the array.

# Prompt the user for the size of the array
n = int(input("Enter the size of the array: "))

# Initialize an empty list to store the array of elements
array = []

# Read the elements of the array from the user
print("Enter elements for the array:")
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Initialize variables to store the largest and second largest elements
largest = float('-inf')
second_largest = float('-inf')

# Find the largest and second largest elements
for element in array:
  if element > largest:
    second_largest = largest
    largest = element
  elif element > second_largest and element != largest:
    second_largest = element

# Display the second largest element
print("The second largest element", second_largest)