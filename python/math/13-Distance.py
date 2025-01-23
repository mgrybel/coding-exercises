# Write a program that reads the x and y positions of two points
# in the Cartesian plane, and calculates the distance between them.

import math

# Prompt the user for the coordinates of point 1
x1 = float(input('Enter the x coordinate of point 1: '))
y1 = float(input('Enter the y coordinate of point 1: '))

# Prompt the user for the coordinates of point 2
x2 = float(input('Enter the x coordinate of point 2: '))
y2 = float(input('Enter the y coordinate of point 2: '))

# Calculate the distance between the two points
distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Display the distance between the two points
print('The distance between the two points is:', distance)