# Write a program that asks for three numbers and displays the largest one.

# Prompt the user for three numbers
number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
number3 = float(input("Enter the third number: "))

# Determine the largest number using conditional statements
if number1 >= number2 and number1 >= number3:
  largest_number = number1
elif number2 >= number1 and number2 >= number3:
  largest_number = number2
else:
  largest_number = number3

# Display the largest number to the user
print("The largest number is:", largest_number)