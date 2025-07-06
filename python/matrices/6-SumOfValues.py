# Write a program that fills a 4x4 matrix with random numbers and
# displays the sum of values present in each row and in each column.

import random

# Create a 4x4 matrix filled with random numbers
matrix = [[random.randint(1, 10) for _ in range(4)] for _ in range(4)]

# Initialize variables to store the sums of rows and columns
row_sums = [0] * 4
column_sums = [0] * 4

# Calculate the sum of values in each row and column
for i in range(4):
  for j in range(4):
    # Update the sum of the i-th row
    row_sums[i] += matrix[i][j]

    # Update the sum of the j-th column
    column_sums[j] += matrix[i][j]

# Display the matrix
print("The matrix:")
for row in matrix:
  print(row)

# Display the sums of rows
print("The sum of values in each row:")
for i in range(4):
  print("Row", i + 1, ":", row_sums[i])

# Display the sums of columns
print("The sum of values in each column:")
for j in range(4):
  print("Column", j + 1, ":", row_sums[j])