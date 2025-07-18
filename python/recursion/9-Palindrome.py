# Write a recursive function to determine whether a word is a palindrome.

def is_palindrome(word):
  # Bae cas: if the word has 0 or 1 character, it is a palindrome
  if len(word) <= 1:
    return True
  # Recursive case: check if the first and the last characters are equal,
  # and recursively check if the remaining substring is a palindrome
  if word[0] == word[-1]:
    return is_palindrome(word[1:-1])
  else:
    return False
  
# Example
print("Is the word 'kayak' a palindrome:", is_palindrome("kayak"))
