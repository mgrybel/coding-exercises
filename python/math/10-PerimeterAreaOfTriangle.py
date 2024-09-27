# Write a program that calculates the perimeter and area of a triangle,
# using the formulas P = a + b + c and A = (b * h) / 2,
# where a, b and c are the sides of the triangle 
# and h is the height relative to the side B.

# Prompt the user for the lenghts of the sides and height of the triangle
side_a = float(input('Enter the length of side a: ')) 
side_b = float(input('Enter the length of side b: ')) 
side_c = float(input('Enter the length of side c: ')) 
height = float(input('Enter the height relative to side b: '))

# Calculate the perimeter
perimeter = side_a + side_b + side_c

# Calculate the area
area = (side_b + height) / 2

# Display the results
print('Perimeter of the triangle', perimeter)
print('Area of the triangle:', area)