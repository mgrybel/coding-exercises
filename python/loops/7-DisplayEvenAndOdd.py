# Write a program that displays even numbers 1 to 50 and 
# odd numbers 51 to 100 using a loop.

# Initialize a variable to start at 1
number = 1

# Use a while loop to iterate until the number reaches 100
while number <= 100:
  if number <= 50:
    if number % 2 == 0:
      print("Even:", number)
  else:
    if number % 2 != 0:
      print("Odd:", number)
  number += 1