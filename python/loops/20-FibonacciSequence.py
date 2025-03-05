# Write a program that prompts the user for a number and displays
# the Fibonacci sequence up to the given number using a loop.

# The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
# The next number is found by adding up the two numbers before it: the 2
# is found by adding the two numbers before it (1+1),;
# the 3 is found by adding the two numbers before it (1+2),; the 5 is (2+3),; and so on.

# Prompt the user for a number
number = int(input("Enter a number: "))

# Initialize variables
previous_number = 0
current_number = 1

# Display the Fibonacci sequence up to the given number
print("The Fibonacci sequence up to", number, ":")

while current_number <= number:
  print(current_number, end=" ")

  # Calculate the next Fibonacci number
  next_number = previous_number + current_number

  # Update previous_number and current_number
  previous_number = current_number
  current_number = next_number