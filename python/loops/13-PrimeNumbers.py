# Write a program that asks the user for a number N and says whether it is prime or not.

# Prompt the user for a number
number = int(input("Enter a number: "))

# Check if the number is less than 2 (not prime)
if number < 2:
  is_prime = False
else:
  is_prime = True

  # Check if the number is divisible by any integer
  # from 2 to the square root of the number
  for i in range(2, int(number ** 0.5) + 1):
    if number % i == 0:
      is_prime = False
      break

# Display the result
if is_prime:
  print(number, "is a prime number.")
else:
  print(number, "is not a prime number.")