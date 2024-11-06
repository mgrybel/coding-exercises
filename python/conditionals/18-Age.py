# Write a program that asks for a person's age and displays whether they are
# a child (0-12), teenager (13-17), adult (18-59), or elderly (60 or older).

# Prompt the user to enter their age
age = int(input("Enter your age: "))

# Check the age range and assign the corresponding category
if age <= 12:
  category = "Child"
elif age <= 17:
  category = "Teenager"
elif age <= 59:
  category = "Adult"
else:
  category = "Elderly"

# Display the category
print("You are a/an", category)