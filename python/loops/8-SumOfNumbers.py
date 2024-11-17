# Write a program that asks the user for a number N and displays
# the sum of all numbers from 1 to N.

# Prompt the user for a number
N = int(input("Enter a number: "))

# Initialize a variable to hold the sum
sum_of_numbers = 0

# Use a for loop to iterate from 1 to N (inclusive)
for number in range(1, N + 1):
  # Add the current number to the sum
  sum_of_numbers += number

# Display the sum of the numbers
print("The sum of numbers from 1 to", N, "is:", sum_of_numbers)