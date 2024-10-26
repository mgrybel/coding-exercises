# Write a program that reads a number and
# determines whether it is even or odd.

# Prompt the user to enter a number
number = float(input('Enter a number: '))

# Check if the number is even or odd
if number % 2 == 0:
  print('The number is even.')
else:
  print('The number is odd.')