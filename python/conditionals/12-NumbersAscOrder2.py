# Write a program that reads three numbers and displays
# them on the screen in ascending order.

# Using list and sort

# Prompt the user to enter three numbers
number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
number3 = float(input("Enter the third number: "))

# Create a list to store the numbers
numbers = [number1, number2, number3]

# Sort the list in ascending order
numbers.sort()

# Display the list in ascending order
print("The numbers in ascending order are:", numbers)