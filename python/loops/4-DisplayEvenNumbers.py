# Write a program that prints all even numbers from 1 to 100.

# Initialize a variable to start at 1
number = 1

# Use a while loop to iterate until the number reaches 100
while number <= 100:
  if number % 2 == 0:
    print(number)
  number += 1