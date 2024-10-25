# Write a program that reads two numbers and tells you which one is bigger.

# Prompt the user for the first number
number1 = float(input('Enter the first number: '))

# Prompt the user for the second number
number2 = float(input('Enter the second number: '))

# Compare the numbers and determine the bigger one
if number1 > number2:
  print('The first number is bigger.')
elif number1 < number2:
  print('The second number is bigger.')
else:
  print('The numbers are equal')