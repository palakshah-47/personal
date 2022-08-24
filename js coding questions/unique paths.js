/**
 * There is a robot on an m x n grid. 
 * The robot is initially located at the top-left corner (i.e., grid[0][0]). 
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time.

Given the two integers m and n, 
return the number of possible unique paths that the robot can take to reach the bottom-right corner.
Input: m = 3, n = 7
Output: 28

idea: recursive with memoization
number of possible paths from grid[row][column] to bottom right corner would be either going towards down or right
so grid[row][column+1] + grid[row+1][column]
we will use recursion and do dfs starting from index 0,0. if it is going out of bound then return 0 or if it reaches to
m-1 and n-1 then return 1; 
if the value is already computed at grid[row][column] then return it, else recurse with bottom and right grids
 */

function uniquePaths(m, n) {
    let dp = new Array(m).fill(0).map(_ => new Array(n).fill(-1));
    return dfs(0, 0, m, n, dp);

    function dfs(r, c, row, column, dp) {
        //invalid index
        if (r < 0 || r >= row || c < 0 || c >= column) return 0;
        //if right-botton is reached
        if (r === row - 1 && c === column - 1) return 1;

        if (dp[r][c] !== -1) return dp[r][c];

        let res = dfs(r + 1, c, row, column, dp) + dfs(r, c + 1, row, column, dp);
        dp[r][c] = res;
        return res;
    }

}
 
/*
* using dp:
with dp, 2 approaches possible, top down or bottom up.
we can start from index 1,1 knowing the value is always 1 and then move down in table
or we can start from last index m-1, n-1, knowing the value is always 1 there and move up
we will traverse the grid backwards and fill our dp table
the answer will be dp[0][0]

we will also traverse the grid upwards and fill our dp table and answer will be dp[row-1][column-1]
*/

function uniquePathswithDPBottomUp(m, n) {
    let dp = new Array(m).fill(0).map(_ => new Array(n));
    for (let r = m - 1; r >= 0; r--){
        for (let c = n - 1; c >= 0; c--){
            if (r === m - 1 || c === n - 1) {
                dp[r][c] = 1;
            } else {
                dp[r][c] = dp[r + 1][c] + dp[r][c + 1];
            }
        }
    }
    return dp[0][0];
}

function uniquePathswithDPTopDown(m, n) {
    let dp = new Array(m+1).fill(0).map(_ => new Array(n+1).fill(0));
    for (let r = 1; r <= m; r++){
        for (let c = 1; c <= n; c++){             
            if (r === 1 && c === 1) dp[r][c] = 1;
            else {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
            }
        }
    }
    return dp[m][n];

}
// console.log(uniquePaths(3, 7));
// console.log(uniquePathswithDP(3, 7));
console.log(uniquePathswithDPTopDown(3, 7));