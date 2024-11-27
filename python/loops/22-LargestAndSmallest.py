# Write a program tak prompts the user for a list of numbers, until the user types
# the number zero, and displays the largest and smallest numbers in the list.

# Initialize variables
largest = float('-inf') # Initialize largest to negative infinity
smallest = float('inf') # Initialize smallest to positive infinity

# Read numbers from the user until zero is entered
while True:
  number = float(input("Enter a number (enter 0 to stop): "))

  # check if the number is zero
  if number == 0:
    break

  # Update largest and smallest numbers
  if number > largest:
    largest = number
  if number < smallest:
    smallest = number

# Display the largest and smallest numbers
if largest != float('-inf') and smallest != float('inf'):
  print("Largest number:", largest)
  print("Smallest number:", smallest)
else:
  print("No numbers were entered.")