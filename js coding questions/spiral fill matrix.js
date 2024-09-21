/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]

                 1  2  3  4
                12 13 14  5
                11 16 15  6
                10  9  8  7 
*/
function generateSpiralMatrix(n) {
  let matrix = Array.from({ length: n }, () => new Array(n).fill(0));
  let value = 1,
    top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (value <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = value++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = value++;
      }
      left++;
    }
  }
  return matrix;
}

console.log(generateSpiralMatrix(4));
