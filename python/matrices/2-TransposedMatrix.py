# Write a program that fills a 4x4 matrix with random values
# and displays the transposed matrix.

import random

# Initialize a 4x4 matrix
matrix = [[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]]

# Fill the matrix random values 
for i in range(4):
  for j in range(4):
    matrix[i][j] = random.randint(1, 100)

# Display the original matrix
print("The original matrix:")
for row in matrix:
  print(row)

# Calculate the transpose of the matrix
transposed_matrix = [[0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0]]

for i in range(4):
  for j in range(4):
    transposed_matrix[i][j] = matrix[j][i]

# Display the transposed matrix
print("\nThe transposed matrix:")
for row in transposed_matrix:
  print(row)