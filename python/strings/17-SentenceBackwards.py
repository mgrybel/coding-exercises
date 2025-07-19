# Write a program that prompts the user for
# a sentence and displays the sentence backwards.

sentence = input("Enter a sentence: ")
reversed_sentence = " ".join(reversed(sentence.split()))

print("The reversed sentence:", reversed_sentence)