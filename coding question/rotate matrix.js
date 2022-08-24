/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*inout 
5    1    9    11    
2    4    8    10    
13   3    6    7
15   14   12   16

Output
15   13   2    5    
14   3    4    1    
12   6    8    9
16   7   10   11
  *Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */
var rotate = function(matrix) {
    // let n = matrix.length;
    // let res = [];
    // for(let j = 0; j <= n-1; j++){
    //     let part = [];
    //     for(let i = n-1; i >= 0; i--){
    //         part.push(matrix[i][j]);
    //     }
    //     res.push(part);
    // }
    // return res;
       
    matrix = matrix.reverse();
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix[i].length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));