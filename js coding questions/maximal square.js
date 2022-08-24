/*
*Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
*/
function maximalSquare(matrix) {
    let dp = new Array(matrix.length).fill(0).map(_=> new Array(matrix[0].length).fill(0));
    let res = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(i === 0 || j === 0){
                if( matrix[i][j] === '1'){
                   dp[i][j] = 1;
                   res = Math.max(res, 1);
                }                             
            } else if(i > 0 && j > 0){
                if(matrix[i][j] === '1'){
                     dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]);
                     res = Math.max(res, dp[i][j]);
                }                             
            }
            
        }
    }
    return (res**2);
}

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));