/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // let row = obstacleGrid.length;
    // let col = obstacleGrid[0].length;
    // let dp = new Array(row).fill(0).map(_=> new Array(col).fill(0));
    
    // for(let i = 0; i < row; i++){
    //     if(obstacleGrid[i][0] === 1){
    //         dp[i][0] = 0;
    //         break;
    //     }
    //      dp[i][0] = 1;
    // }
    
    // for(let j = 0; j < col; j++){
    //      if(obstacleGrid[0][j] === 1){
    //         dp[0][j] = 0;
    //         break;
    //     }
    //      dp[0][j] = 1;
    // }
    
    // for(let i = 1; i < row; i++){
    //     for(let j = 1; j < col; j++){
    //         if(obstacleGrid[i][j] === 1) {
    //             dp[i][j] = 0;
    //         } else{
    //             dp[i][j] = dp[i-1][j] + dp[i][j-1];
    //         }
            
    //     }
    // }
    // return dp[row-1][col-1];

    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    let dp = new Array(row).fill(0).map(_ => new Array(col).fill(0));
    
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
            else if (i === 0 && j === 0) dp[i][j] = 1;
            else if (i === 0) dp[i][j] = dp[i][j - 1];
            else if (j === 0) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[row - 1][col - 1];

};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));