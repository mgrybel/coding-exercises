# Write a program that reads an array of integers and 
# displays the sum of all the elements.

# Using a while loop

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
i = 0
while i < n:
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)
  i += 1

# Calculate the sum of all the elements
sum = 0
i = 0
while i < len(array):
  sum += array[i]
  i += 1

# Display the sum of all the elements
print("The sum of all the elements:", sum)