# Write a program that fills a 3x3 matrix with values entered by the user
# and displays a sum of the main diagonal values.

# Initialize a 3x3 matrix
matrix = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]

# Prompt the user to enter the values for the matrix
print("Enter values for the 3x3 matrix:")

for i in range(3):
  for j in range(3):
    value = int(input("{}, {} ".format(i, j)))
    matrix[i][j] = value

# Calculate the sum of the main diagonal values
sum_diagonal = 0

for i in range(3):
  sum_diagonal += matrix[i][i]

# Display the matrix
print("Matrix:")
for row in matrix:
  print(row)

# Display the sum of the main diagonal values
print("The sum of main diagonal values:", sum_diagonal)