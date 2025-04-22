# Write a program that reads two words and checks if
# the secon word is an anagram of the first.

# Anagram examples: dusty=study, state=taste, cider=cried,
# arc=car, bored=robed, peach=cheap

# Prompt the user for two words
word1 = input("Enter the first word: ")
word2 = input("Enter the second word: ")

# Convert both words to lowercase and remove whitespace
word1 = word1.lower().replace(" ", "")
word2 = word2.lower().replace(" ", "")

# Check if the lengths of the words are equal
if len(word1) != len(word2):
  print("The second word is not an anagram of the first.")
else:
  # Sort the characters of both words
  sorted_word1 = sorted(word1)
  sorted_word2 = sorted(word2)

  # Check if the sorted words are equal
  if sorted_word1 == sorted_word2:
    print("The second word is an anagram of the first.")
  else:
    print("The second word is not an anagram of the first.") 