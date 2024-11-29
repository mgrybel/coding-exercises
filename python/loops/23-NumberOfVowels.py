# Write a program that prompts the user for a sentence and
# displays the number of vowels in the sentence.

# Prompt the user for a sentence
sentence = input("Enter a sentence: ")

# Initialize the vowel count to 0
vowel_count = 0

# Iterate over each character in the sentence
for char in sentence:
  # Convert the character to lowercase for case-insensitive matching
  char_lower = char.lower()

  # Check if the character is a vowel
  if char_lower in 'aeiou':
    # Increment the vowel count 
    vowel_count += 1

# Display the number of vowels in the sentence
print("The number of vowels:", vowel_count)
