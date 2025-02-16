# Write a program that reads three numbers and displays
# them on the screen in ascending order.

# Using if statements

# Prompt the user to enter three numbers
number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
number3 = float(input("Enter the third number: "))

# Check the order of the numbers using if statements
if number1 <= number2 and number1 <= number3:
  if number2 <= number3:
    print("The numbers in ascending order are:", number1, number2, number3)
  else:
    print("The numbers in ascending order are:", number1, number3, number2)
elif number2 <= number1 and number2 <= number3:
  if number1 <= number3:
    print("The numbers in ascending order are:", number2, number1, number3)
  else:
    print("The numbers in ascending order are:", number2, number3, number1)
else:
  if number1 <= number2:
    print("The numbers in ascending order are:", number3, number1, number2)
  else:
    print("The numbers in ascending order are:", number3, number2, number1)