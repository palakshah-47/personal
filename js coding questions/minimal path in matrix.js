/*
* Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
1 3 1
1 5 1
4 2 1

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
idea:
keep doing sum for current cell + left cell or current cell + top cell and take mimimum of it. This 
should exclude first row and column. fill first column and row seperately.

1 4 5
2 7 6
6 8 7
*/

function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;

    //first row
    //there is nothing above first row, so we just calculate the distance by what is to the left of it  
    for (let j = 1; j < n; j++){
        grid[0][j] += grid[0][j - 1];
    }

      //first column
    //there is nothing left to first column, so we just calculate the distance by what is to the top of it
    for (let i = 1; i < m; i++){
        grid[i][0] += grid[i - 1][0];
    }

    //for all other cells from first row and column
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    
    //return the distance of bottom right corner
    return grid[m - 1][n - 1];
}

console.log(minPathSum([[1,2,3],[4,5,6]]));