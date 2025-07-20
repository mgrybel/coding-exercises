# Write a recursive function to calculate the factorial of a number

def factorial(n):
  # Base case: factorial of 0 or 1 is 1
  if n == 0 or n == 1:
    return 1
  # Recursive case: multiply n by the factorial of (n - 1)
  else:
    return n * factorial(n - 1)
  
# Test the factorial function
print("The factorial of 5:", factorial(5))