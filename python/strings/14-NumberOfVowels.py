# Write a program that reads a word and displays the number of viwels present in it.

word = input("Enter a word: ")

# Define a list of vowels
vowels = ['a', 'e', 'i', 'o', 'u']

# Initialize a variable to count the number of vowels
count = 0

# Iterate over each character in the word
for char in word:
  # Check if the character is a vowel
  if char.lower() in vowels:
    count += 1

print("Number of vowels:", count)