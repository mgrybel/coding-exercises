# Write a program that calculates and displays the sum of
# even numbers from 1 to 100 using a loop.

# Initialize a variable
sum_of_evens = 0

# Use a for loop with range and step 2 to iterate through even numbers from 2 to 100
for num in range(2, 101, 2):
  # Add the current number to the sum
  sum_of_evens += num

# Display the sum of even numbers
print("The sum of even numbers from 1 to 100 is:", sum_of_evens)