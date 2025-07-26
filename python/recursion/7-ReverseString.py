# Write a recursive function to reverse a string.

def reverse_string(str):
  # Base case: if the string is empty or has only one
  # character, return the string itself
  if len(str) <= 1:
    return str
  # Recursive case: reverse the substring starting from
  # the second character and append the first character
  return reverse_string(str[1:]) + str[0]

# Test the reverse_string function
print("Hello, World!", reverse_string("Hello, World!"))