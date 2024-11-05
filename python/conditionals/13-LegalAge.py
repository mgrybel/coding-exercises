# Write a program that reads the age of three people and displays
# how many of them are of legal age (age 18 or older).

# Prompt the user to enter the age of three people
age1 = int(input("Enter the age of the first person: "))
age2 = int(input("Enter the age of the second person: "))
age3 = int(input("Enter the age of the third person: "))

# Initialize a variable to keep the count of legal age individuals
legal_age_count = 0

# Check if each person is of legal age
if age1 >= 18:
  legal_age_count += 1

if age2 >= 18:
  legal_age_count +=1

if age3 >= 18:
  legal_age_count += 1

# Display the count of legal age individuals
print("Out of the three people,", legal_age_count, "person(s) is/are of legal age.")