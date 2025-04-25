# Write a program that receives a sentence and
# displays the number of blank spaces present in it.

# Using a for loop

# Prompt the user for a sentence
sentence = input("Enter a sentence: ")

# Initialize a variable to count the number of blank spaces
count = 0

# Iterate over each character in the sentence
for char in sentence:
  # Check if the character is a blank space
  if char == " ":
    count += 1

print("The number of blank spaces:", count)