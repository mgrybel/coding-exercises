# Write a program that calculates the perimeter and area of a rectangle,
# using the formula P = 2(w + 1) and A = wl where w is the width and l is the length

# Prompt the user for the width and length of the rectangle
width = float(input('Enter the width of the rectangle: '))
length = float(input('Enter the length of the rectangle: '))

# Calculate the perimeter
perimeter = 2 * (width + length)

# Calculate the area
area = width * length

# Display the results
print('Perimeter of the rectangle:', perimeter)
print('Area of the rectangle:', area)