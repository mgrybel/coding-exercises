# Write a program that reads an array of integers and
# displays the average of the elements.

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Calculate the sum of the elements
sum = 0
for element in array:
  sum += element

# Calculate the average
average = sum / n 

# Display the sum and average
print("Sum:", sum)
print("Average:", average)
