# Write a program that asks for a person's age
# and displays if they are of legal age or not.

# Prompt the user for their age
age = int(input('Enter your age: '))

# Check if the person is of legal age
if age >= 18:
  print('You are of legal age.')
else:
  print('You are not of legal age.')