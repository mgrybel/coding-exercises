# Write a program that asks for two numbers and displays if 
# the first number is divisible by the second.

# Prompt the user to enter the first number
number1 = int(input("Enter the first number: "))

# Prompt the user to enter the second number
number2 = int(input("Enter the second number: "))

# Check if the first number is divisible by the second number
if number1 % number2:
  result = "divisible"
else:
  result = "not divisible"

# Display the result
print(f"The first number is {result} by the second number.")