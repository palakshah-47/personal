/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]
Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 100,
2 ≤ matrix[0].length ≤ 100.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/
/*
in this program, we need to find the location of mine by checking to left, top, right and bottom of thw
current index, and if both top and left is true then increment count of left upper corner, 
same for right and bottom.
*/

function minesweeper(matrix) {
  let output = [];
  let rowL = matrix.length;
  let colL = matrix[0].length;
  for (let r = 0; r < rowL; r++) {
    let row = [];
    for (let c = 0; c < colL; c++) {
      let count = 0;
      if (matrix[r - 1] && matrix[r - 1][c]) count++;
      if (matrix[r - 1] && matrix[r - 1][c - 1]) count++;
      if (matrix[r - 1] && matrix[r - 1][c + 1]) count++;
      if (matrix[r] && matrix[r][c - 1]) count++;
      if (matrix[r] && matrix[r][c + 1]) count++;
      if (matrix[r + 1] && matrix[r + 1][c]) count++;
      if (matrix[r + 1] && matrix[r + 1][c - 1]) count++;
      if (matrix[r + 1] && matrix[r + 1][c + 1]) count++;
      row.push(count);
    }
    output.push(row);
  }
  return output;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
