# Write a program that asks for the name of a day of the week and displays
# whether it is a weekday (Monday to Friday) or a weekend (Saturday or Sunday).

# Prompt the user to enter the name of a day
day = input("Enter the name of a day: ")

# Convert the input to lowercase for case-insensitive comparison
day = day.lower()

# Check if the day is a weekday or a weekend day
if day == "saturday" or day == "sunday":
  result = "Weekend day"
else:
  result = "Weekday"

# Display the result
print(f"{day.capitalize()} is a {result}.")