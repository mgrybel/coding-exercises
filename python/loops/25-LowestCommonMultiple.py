# Write a program that determines the lowest common multiple (LCM)
# between two numbers entered by the user.

# Prompt the user for two numbers
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))

# Find the maximum of the two numbers
maximum = max(number1, number2)

# Calculate the LCM
while True:
  if maximum % number1 == 0 and maximum % number2 == 0:
    lcm = maximum
    break
  maximum += 1

# Display the LCM
print("LCM of", number1, "and", number2, "is:", lcm)
