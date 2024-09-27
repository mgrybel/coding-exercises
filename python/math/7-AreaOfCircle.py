# Write a program that calculates the area of a cirle from 
# the radius, using the formula A = π * r^2

import math

# Prompt the user for the radius
radius = float(input('Enter the radius of the circle: '))

# Calculate the area
area = math.pi * radius ** 2

# Display the result
print('The area of the circle is:', area)