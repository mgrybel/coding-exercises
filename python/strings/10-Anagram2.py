# Write a program that reads two words and checks if
# the secon word is an anagram of the first.

# Anagram examples: dusty=study, state=taste, cider=cried,
# arc=car, bored=robed, peach=cheap

word1 = input("Enter the first word: ")
word2 = input("Enter the second word: ")

# Convert both words to lowercase and remove whitespace
word1 = word1.lower().replace(" ", "")
word2 = word2.lower().replace(" ", "")

# Check if the lengths of the words are equal
if len(word1) != len(word2):
  print("The second word is not an anagram of the first.")
else:
  # Create dictionaries to count the occurrences of each
  # character in the word
  char_count1 = {}
  char_count2 = {}

  # Count the occurrences of each character in word1
  for char in word1:
    char_count1[char] = char_count1.get(char, 0) + 1

  # Count the occurrences of each character in word2
  for char in word2:
    char_count2[char] = char_count2.get(char, 0) + 1 

  # Check if the sorted words are equal
  if char_count1 == char_count2:
    print("The second word is an anagram of the first.")
  else:
    print("The second word is not an anagram of the first.") 