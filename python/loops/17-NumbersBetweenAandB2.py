# Write a program that prompts the user for two numbers A and B
# and displays all numbers between A and B.

# Prompt the user for the two numbers
A = int(input("Enter the value of A: "))
B = int(input("Enter the value of B: "))

# Determine the starting and ending values for the loop
if A <= B:
  start = A
  end = B
else:
  start = B
  end = A

# Use a for loop to iterate over the numbers
# between A and B (inclusive)
for number in range(start, end + 1):
  print(number, end=" ")

# Add a new line for better output formatting
print()