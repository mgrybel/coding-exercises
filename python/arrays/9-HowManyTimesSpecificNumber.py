# Write a program that reads an array of integers and
# displays how many times a specific number appears in the array.

# Prompt the user for the size of the array
n = int(input("Enter the size of the array: "))

# Initialize an empty list to store the elements of the array
array = []

# Read the elements of the array from the user
print("Enter elements for the array:")
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Prompt the user for the number of elements to search for
target = int(input("Enter the number of elements to search for: "))

# Count the number of occurrences of the target number in the array
count = 0
for element in array:
  if element == target:
    count += 1

# Display the result
print("The number", target, "appears", count, "time(s) in the array.")