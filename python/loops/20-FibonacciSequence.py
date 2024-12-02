# Write a program that prompts the user for a number and displays
# the Fibonacci sequence up to the given number using a loop.

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