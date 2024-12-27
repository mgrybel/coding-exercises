# Write a program that reads an array of integers and
# displays the elements in reverse order.
# Reverse the array using list slicing

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Reverse the array using list slicing
reversed_array = array[::-1]

# Display the elements in reverse order
print("Elements in reverse order:")
for element in reversed_array:
  print(element)