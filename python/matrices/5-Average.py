# Write a program that reads a 3x3 matrix and calculates the average
# of the values present in the even positions (the sum of the even
# indices) of the matrix.

# Initialize a 3x3 matrix
matrix = []

# Read the matrix from a user
print("Enter the values of the 3x3 matrix:")
for _ in range(3):
  row = []
  for _ in range(3):
    value = int(input("Enter a value: "))
    row.append(value)
  matrix.append(row)

# Calculate the sum and count of the values at even positions
sum_even = 0
count_even = 0

for i in range(3):
  for j in range(3):
    if (i + j) % 2 == 0: # Check if the sum of indices is even
      sum_even += matrix[i][j]
      count_even += 1

# Calculate the average of values at even positions
average_even = sum_even / count_even

# Display the result
print("The average of values at even positions:", average_even)