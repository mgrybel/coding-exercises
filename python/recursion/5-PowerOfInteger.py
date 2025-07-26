# Write a recursive function to calculate the power of 
# an integer raised to an exponent.

def power(base, exponent):
  # Base case: exponent is 0, return 1
  if exponent == 0:
    return 1
  # Recursive case: multiply base with
  # power of (base, exponent - 1)
  return base * power(base, exponent - 1)

# Test the power function
print("3 to the power of 4 is equal to:", power(3, 4))