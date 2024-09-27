# Write a program that calculates and displays the perimeter
# of a circle, prompting the user for the radius.

import math

# Prompt the user for the radius
radius = float(input('Enter the radius of the circle: '))

# Calculate the perimeter
perimeter = 2 * math.pi * radius

# Display the result
print('The perimeter of the circle is:', perimeter)