/*
* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let count = 0;
    let row = grid.length;
    let col = grid[0].length;
    
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(grid[r][c] === '1') {
                count++;
                dfs(grid, r, c, row, col);
            }
        }
    }
      
    return count;
};

var dfs = function (grid, r, c, row, col) {
        if(r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === '0' ) return;
        
        grid[r][c] = '0';
        
        dfs(grid, r+1, c, row, col);
        dfs(grid, r-1, c, row, col);
        dfs(grid, r, c+1, row, col);
        dfs(grid, r, c-1, row, col);
            
    }    

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//     if(grid.length === 0) return 0;
    
//     let noOfIslands = 0
    
//     for(let i = 0; i < grid.length; i++){
//         for (let j = 0; j < grid[i].length; j++){
//             if(grid[i][j] === '1'){
//                 noOfIslands++;
//                 convertIslandToWater(grid, i, j);
//             }
//         }
//     }
//     return noOfIslands;
// };

// let convertIslandToWater = function(grid, rowIndex, columnIndex) {
//     if(grid[rowIndex] === undefined || grid[rowIndex][columnIndex] === undefined ||
//        grid[rowIndex][columnIndex] === '0') return;
    
//     grid[rowIndex][columnIndex] = '0';
//     convertIslandToWater(grid,rowIndex+1,columnIndex);
//     convertIslandToWater(grid,rowIndex-1,columnIndex);
//     convertIslandToWater(grid,rowIndex,columnIndex+1);
//     convertIslandToWater(grid,rowIndex,columnIndex-1);
// };
    
class Solution
{
    //Function to find the number of 'X' total shapes.
    xShape(grid)
    {
    	let row = grid.length;
    	let col = grid[0].length;
    	let count = 0;
    	for(let i = 0 ; i < row; i++){
    	    for(let j = 0; j < col; j++){
    	        if(grid[i][j] === 'X'){
    	            count++;
    	            this.helper(i, j, grid, row, col);
    	        }
    	    }
    	}
    	return count;
    }
    
    helper(i, j, grid, row, col){
        if(i <0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') return;
        grid[i][j] = '0';
        this.helper(i+1, j, grid, row, col);
        this.helper(i, j+1, grid, row, col);
        this.helper(i-1, j, grid, row, col);
        this.helper(i, j-1, grid, row, col);
    }
}




// console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));

let sol = new Solution();
console.log(sol.xShape([['X','O','X'], ['O', 'X', 'O'], ['X', 'X', 'X']]));