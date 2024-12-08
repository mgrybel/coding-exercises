// Write a program that reads an m x n matrix, indicating the location
// where there are mines in a Minesweeper game (being 0 for a neutral field,
// and 1 for locations where there would be mines), and the program should
// return a matrix indicating, for each position, the number of mines
// in neighboring houses.

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      let count = 0;
      for (let r = i - 1; r <= i + 1; r++) {
        for (let c = j - 1; c <= j + 1; c++) {
          if (
            r >= 0 &&
            r < rows &&
            c >= 0 &&
            c < cols &&
            !(r === i && c === j)
          ) {
            count += matrix[r][c];
          }
        }
      }
      result[i][j] = count;
    }
  }
  return result;
}

// Example matris with mine locations
const matrix = [
  [0, 1, 0],
  [1, 1, 0],
  [0, 1, 0],
];

// Display the result
console.log(minesweeper(matrix));
