# Write a program that reads numbers from the user until
# zero is entered, and displays the average of the numbers entered.

# Initialize variables
total = 0
count = 0

# Read numbers from the user until zero is entered
while True:
  number = int(input("Enter a number (enter 0 to stop:) "))

  # Check if the number is zero
  if number == 0:
    break

  # And add the number to total and increment the count
  total += number
  count += 1

# Calculate the average
if count > 0:
  average = total / count
  print("Average:", average)
else:
  print("No numbers entered")