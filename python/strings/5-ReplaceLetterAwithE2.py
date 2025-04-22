# Write a program that takes a sentence and
# replaces all the letters "a" with "e"

# Case-sensitive
# The program replaces only the lowercase "a", not the uppercase "A"

# Using a for loop

# Prompt the user for a sentence
sentence = input("Enter a sentence: ")

new_sentence = ""
for letter in sentence:
  if letter == "a":
    new_sentence += "e"
  else:
    new_sentence += letter

print("The modified sentence:", new_sentence)