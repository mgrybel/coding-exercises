# Write a program that reads the grades of two tests, calculates
# the simple arithmetic mean, and determines whether the student
# passed (average greater than or equal to 6) or failed
# (average less than 6).

# Prompt the user to enter the grade of the first test
grade1 = float(input("Enter the grade of the first test: "))

# Prompt the user to enter the grade of the second test
grade2 = float(input("Enter the grade of the second test: "))

# Calculate the average of the grades
average = (grade1 + grade2) / 2


# Check if the student passed or failed based on the average
if average >= 6:
  print("The student passed with an average of", average)
else:
  print("The student failed with an average of", average)