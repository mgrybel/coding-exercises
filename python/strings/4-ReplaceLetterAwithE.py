# Write a program that takes a sentence and
# replaces all the letters "a" with "e"

# Case-sensitive
# The program replaces only the lowercase "a", not the uppercase "A"

# Prompt the user for a sentence
sentence = input("Enter a sentence: ")

new_sentence = sentence.replace("a", "e")

print("The modified sentence:", new_sentence)