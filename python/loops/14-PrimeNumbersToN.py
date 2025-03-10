# Write a program that prompts the user for a number N and displays all prime numbers less than N.

# Prompt the user for a number
n = int(input("Enter a number: "))

print("Prime numbers less than", n, "are:")

# Iterate through numbers from 2 to N
for number in range(2, n):
  is_prime = True

  # Check if the current number is divisible by any integer 
  # from 2 to the square root of the number
  for i in range(2, int(number ** 0.5) + 1):
    if number % i == 0:
      is_prime = False
      break

  # Display the prime number
  if is_prime:
    print(number, end=" ")

# Add a new line for better output formatting
print()