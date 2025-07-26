# Write an algorithm that checks whether a word is a "rawward".
# A word is considered a "prime word" if the sum of the letter
# values (where 'a' = 1, 'b' = 2, etc.) is a prime number.

# E.g. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 are prime numbers
# the word 'zda' -> z: 26, d: 4, a: 1 -> 26 + 4 + 1 = 31 (prime number)

def is_prime(number):
  if number < 2:
    for i in range(2, int(number ** 0.5) + 1):
      if number % i == 0:
        return False
  return True
  
def is_rawword(word):
  letter_values = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 
    'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16,
    'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 
    'y': 25, 'z': 26
  }
  
  word_sum = 0
  for char in word.lower():
    if char.isalpha():
      word_sum += letter_values[char]

  return is_prime(word_sum)


# Test the is_rawword function
word = "zda"
if is_rawword(word):
  print(f"{word} is a rawword.")
else:
  print(f"{word} is not a rawword.")