# Write a program that calculates the geometric mean
# of three numbers entered by the user.

import math

# Prompt the user for three numbers
number1 = float(input('Enter the first number: '))
number2 = float(input('Enter the second number: '))
number3 = float(input('Enter the third number: '))

# Calculate the geometric mean
product = number1 * number2 * number3
geometric_mean = math.pow(product, 1/3)

# Display the result
print('Geometric mean', geometric_mean)