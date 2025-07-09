# Write a program that reads two 2x2 matrices and 
# displays the sum of the two matrices.

# Initialize two 2x2 matrices
matrix1 = [[0, 0], [0, 0]] 
matrix2 = [[0, 0], [0, 0]] 
sum_matrix = [[0, 0], [0, 0]]

# Read the values for the first matrix
print("Enter the elements of the first matrix:")
for i in range(2):
  for j in range(2):
    matrix1[i][j] = int(input(f"Enter an element at position ({i + 1}, {j + 1}): "))

# Read the values for the second matrix
print("Enter the elements of the second matrix:")
for i in range(2):
  for j in range(2):
    matrix2[i][j] = int(input(f"Enter an element at position ({i + 1}, {j + 1}): "))

# Display the matrix
print("Matrix 1:")
for row in matrix1:
  print(row)

# Display the matrix
print("Matrix 2:")
for row in matrix2:
  print(row)

# Calculate the sum of of the matrices
for i in range(2):
  for j in range(2):
    sum_matrix[i][j] = matrix1[i][j] + matrix2[i][j]

# Display the sum of the matrices
print("\nThe sum of the two matrices:")
for row in sum_matrix:
  print(row)