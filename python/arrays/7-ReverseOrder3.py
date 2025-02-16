# Write a program that reads an array of integers and
# displays the elements in reverse order.

# Reverse the array without modifying the array itself or
# creating another one

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements of the array from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Display the elements in reverse order
print("The elements in reverse order:")
for i in range(n-1, -1, -1):
  print(array[i])
