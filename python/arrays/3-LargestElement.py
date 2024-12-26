# Write a program that reads an array of integers and 
# displays the largest element in the array.

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Initialize a variable to store the largest element
largest = array[0]

# Iterate over the elements in the array
for i in range(1, n):
  if array[i] > largest:
    largest = array[i]

# Display the largest element
print("The largest element:", largest)