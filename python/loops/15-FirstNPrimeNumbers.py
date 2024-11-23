# Write a program that displays the first N prime numbers,
# where N is informed by the user, using a loop.

# Prompt the user for a number
N = int(input("Enter the value of N: "))

# Initialize the counter to keep track of the number of prime numbers
count = 0

# Start checking prime numbers from 2
number = 2

print("The first", N, "prime numbers are:")

while count < N:
  is_prime = True

  # Check if the current number is divisible by any integer
  # from 2 to the square root of the number
  for i in range(2, int(number ** 0.5) + 1):
    if number % i == 0:
      is_prime = False
      break

  # If the number is prime, display it
  if is_prime:
    print(number, end=" ")
    count += 1

  # Move to the next number for checking
  number += 1

# Add a new line for better output formatting
print()