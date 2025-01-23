# Create a program that calculates and displays the arithmetic mean
# of three grades entered by the user.

# Prompt the user for three grades
grade1 = float(input('Enter the first grade: '))
grade2 = float(input('Enter the second grade: '))
grade3 = float(input('Enter the third grade: '))

# Calculate the arithmetic mean
mean = (grade1 + grade2 + grade3) / 3

# Round the mean to two decimal places
rounded_mean = round(mean, 2)

# Display the arithmetic mean
print('The arithmetic mean:', '{:.2f}'.format(rounded_mean))