# Write a recursive function to check if a number is prime.

def is_prime(n, divisor = 2):
  # Base cases
  if n <= 1:
    return False
  if n == 2:
    return True
  if n % divisor == 0:
    return False
  if divisor * divisor > n:
    return True
  # Recursive case
  return is_prime(n, divisor + 1)

# Example
print("Is 11 a prime number?", is_prime(11))