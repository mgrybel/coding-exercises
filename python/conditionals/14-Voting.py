# Write a program that reads the year of birth of a person and informs if
# the person is able to vote (age greater than or equal to 16).

import datetime

# Prompt the user to enter the year of birth
year_of_birth = int(input("Enter the year of birth: "))

# Calculate the current year
current_year = datetime.datetime.now().year

# Calculate the age of the person
age = current_year - year_of_birth

# Check if the person is eligible to vote
if age >= 16:
  print("You are eligible to vote.")
else:
  print("You are not eligible to vote yet.")