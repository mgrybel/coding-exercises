# Write a recursive function to calculate
# a Fibonacci sequence up to a given number.

def fibonacci(n):
  # Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
  if n == 0:
    return 0
  elif n == 1:
    return 1
  # Recursive case: Fibonacci of n is the sum of
  # the previous two Fibonacci numbers
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)
  
# Example
print("A Fibonacci sequence of 7:", fibonacci(7))