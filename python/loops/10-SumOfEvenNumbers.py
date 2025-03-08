# Write a program that calculates and displays the sum of even numbers from 1 to 100 using a loop.

# Initialize variables
sum_of_evens = 0
number = 2

# Use a while loop to iterate until number reaches 100
while number <= 100:
  # Add the current number to the sum if it is even
  sum_of_evens += number

  # Increment the number by 2 to get the next even number
  number += 2

# Display the sum of even numbers
print("The sum of even numbers from 1 to 100 is:", sum_of_evens)