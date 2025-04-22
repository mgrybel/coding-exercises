# Write a program that takes a word and 
# displays each letter separately.

# Using a while loop

# Prompt the user for a word
word = input("Enter a word: ")

index = 0
while index < len(word):
  letter = word[index]
  print(letter)
  index += 1