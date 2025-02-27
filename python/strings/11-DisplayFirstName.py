# Write a program that takes a full name 
# and displays only the first name.

full_name = input("Enter your full name: ")

# Split the full name into a list of names using 
# whitespace as the delimiter
names = full_name.split()

# Get the first name from the list
first_name = names[0]

print("First name:", first_name)