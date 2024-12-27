# Write a program that reads an array of integers and
# displays the elements in reverse order.

# Prompt the user for the number of elements in the array
n = int(input("Enter the number of elements: "))

# Initialize an empty list to store the elements
array = []

# Read the elements from the user
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Invert the array using a loop
start = 0
end = n - 1
while start < end:
  # Swap the elements at the start and end positions
  array[start], array[end] = array[end], array[start]
  start += 1
  end -= 1

# Display the elements in reverse order
print("Elements in reverse order:")
for element in array:
  print(element)