# Write a program that prompts the user for a number and display its divisors.

# Prompt the user for a number
number = int(input("Enter a number: "))

# Display the divisors
print("Divisors of", number, ":")
for i in range(1, number + 1):
  if number % i == 0:
    print(i)