# Create a program that reads an array of integers 
# and checks that all elements are even.

# Prompt the user for the size of the array
size = int(input("Enter the size of the array: "))

# Initialize an empty list to store the elements of the array
array = []

# Read the elements of the array from the user
print("Enter elements for the array:")
for i in range(n):
  element = int(input("Enter element {}: ".format(i + 1)))
  array.append(element)

# Flag to track if all elements are even
all_even = True

# Check if all elements are even
for element in array: # If the element is not even
  if element % 2 != 0:
    all_even = False
    break

# Display the results
if all_even:
  print("All elements are even.")
else:
  print("Noe all elements are even.")