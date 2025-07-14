# Write a recursive function to calculate the sum 
# of the digits of an integer. 

def sum_of_digits(n):
  # Base case
  if n == 0:
    return 0
  # Recursive case
  return (n % 10) + sum_of_digits(n // 10)

# Example
print("The sum of digits of 55:", sum_of_digits(55))