# Write a program that reads numbers from the user until a negative number
# is entered, and prints the sum of the positive numbers.

# Initialize variables
sum_positive = 0

# Read numbers from the user
while True:
  number = int(input("Enter a number (negative number to exit): "))

  # Check if the number is positive
  if number >= 0:
    sum_positive += number
  else:
    break

# Print the sum of positive numbers
print("Sum of positive numbers:", sum_positive)