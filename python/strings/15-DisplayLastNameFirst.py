# Write a program that takes a full name and
# displays the last name first,

full_name = input("Enter your full name: ")

# Split the full name into a list of names using 
# whitespace as the delimiter
names = full_name.split()

# Get the last name from the list
last_name = names[-1]

print("Last name first:", last_name)