# Write a function that receives 3x3 matrix representing
# the game of tic-tac-toe, and check if there is a winner,
# if there is a tie, or if the game is not over yet.

# In tic-tac-toe, a player wins by getting three of their marks in a row, 
# either horizontally, vertically, or diagonally. 

def check_tic_tac_toe(matrix):
  # Check rows
  for row in matrix:
    if row[0] == row[1] == row[2] and row[0] != ' ':
      return print("Row - the winning value is:", row[0])
    
  # Check columns
  for col in range(3):
    if matrix[0][col] == matrix[1][col] == matrix[2][col] and matrix[0][col] != ' ':
      return print("Column - the winning value is:", matrix [0][col])
    
  # Check diagonals
  if matrix[0][0] == matrix[1][1] == matrix[2][2] and matrix[0][0] != ' ':
    return print("Diagonal - the winning value is:", matrix[0][0])
  
  if matrix[0][2] == matrix[1][1] == matrix[2][0] and matrix[0][2] != ' ':
    return print("4. The winning value is:", matrix[0][2])
  
  # Check if the game is not over yet
  for row in matrix:
    if ' ' in row:
      return "The game is not over yet."
    
  # If there are no empty spaces and no winner, there is a tie
  return "Tie"

# Test the check_tic_tac_toe function
matrix = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 1, 0]
]

print("The matrix:")
for row in matrix:
  print(row)

check_tic_tac_toe(matrix)