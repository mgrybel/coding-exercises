# Write a program that asks the user for a number N and displays
# the sum of all numbers from 1 to N.

# Prompt the user for a number
N = int(input("Enter a number: "))

# Initialize variables
sum_of_numbers = 0
num = 1

# Use a while loop to iterate until num reaches N
while num <= N:
  # Add the current number to the sum
  sum_of_numbers += num

  # Increment the number
  num += 1

# Display the sum of the numbers
print("The sum of numbers from 1 to", N, "is:", sum_of_numbers)