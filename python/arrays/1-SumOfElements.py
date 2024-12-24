# Write a program that reads an array of integers and 
# displays the sum of all the elements.

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter elemnt {}: ".format(i + 1)))
  array.append(element)

# Calculate the sum of all the elements
sum = 0
for element in array:
  sum += element

# Display the sum of all the elements
print("The sum of all the elements:", sum)