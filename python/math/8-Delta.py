# Write a program that calculates the delta 
# of a quadratic equation.

# Prompt the user for coefficient of the quadratic equation
a = float(input('Enter the coefficient a: '))
b = float(input('Enter the coefficient b: '))
c = float(input('Enter the coefficient c: '))

# Calculate the delta
delta = b ** 2 - 4 * a * c

# Display the result
print('The delta of the quadratic equation is:', delta)