# Write a program that fills a 5x5 matrix with integers and
# displays the largest value in the matrix and its position.

# Initialize a 5x5 matrix
matrix = [[0] * 5 for _ in range(5)]

# Read the values for the matrix
print("Enter the elements of the matrix:")
for i in range(5):
  for j in range(5):
    matrix[i][j] = int(input(f"Enter an element at position ({i + 1}, {j + 1}): "))

# Find the largest value and its position in the matrix
max_value = matrix[0][0]
max_position = (0, 0)

for i in range(5):
  for j in range(5):
    if matrix[i][j] > max_value:
      max_value = matrix[i][j]
      max_position = (i, j)

# Display the matrix
print("The matrix:")
for row in matrix:
  print(row)

# Display the largest value and its position
print(f"The largest value: {max_value}")
print(f"The position of the largest value: ({max_position[0] + 1}, {max_position[1] + 1})")
