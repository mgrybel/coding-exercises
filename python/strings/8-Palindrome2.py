# Write a program that reads a word and checks if it is 
# a palindrome (if it can be read backwards the same way).

# Palindrome examples: Madam, civic, deed, Kayak, level, pop, Hannah, Anna, mom

# Case-sensitive
# Using a for loop

# Prompt the user for a word
word = input("Enter a word: ")

is_palindrome = True

length = len(word)
for i in range(length // 2):
  if word[i] != word[length - 1 - i]:
    is_palindrome = False
    break

if is_palindrome:
  print("The word is a palindrome.")
else:
  print("The word is not a palindrome.")