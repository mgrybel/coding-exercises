# Write a recursive function to find the greatest
# common divisor (GCD) of two numbers.

def gcd(a, b):
  # Base case: if b is 0, a is GCD
  if b == 0:
    return a
  # Recursive case: compute the GCD of by and
  # the remainder of a divided by b
  return gcd(b, a % b)

# Example
print("The greatest common divisor (GCD) of 12 and 6 is equal to:", gcd(12, 6))