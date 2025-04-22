# Write a program that reads a word and checks if it is 
# a palindrome (if it can be read backwards the same way).

# Palindrome examples: Madam, civic, deed, Kayak, level, pop, Hannah, Anna, mom

# Case-sensitive
# Using slicing

# Prompt the user for a word
word = input("Enter a word: ")

reversed_word = word[::-1] # Reverse the word using slicing

if word == reversed_word:
  print("The word is a palindrome.")
else:
  print("The word is not a palindrome.")