# Write a program that determines the greatest common divisor (GCD)
# between two numbers entered by the user.

# Prompt the user for two numbers
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))

# find the smaller of the two numbers
smaller = min(number1, number2)

# Initialize the GCD variable
gcd = 1

# Calculate the GCD
for i in range(1, smaller + 1):
  if number1 % i == 0 and number2 % i == 0:
    gcd = i

# Display the GCD
print("GCD of", number1, "and", number2, "is:", gcd)