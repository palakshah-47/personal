/*
* The second challenge of the minesweeper series!

As you click on a cell of the gameboard, there are 3 cases that thing will happen:

You clicked on a cell that contains a non-zero number (from 1 to 8). At that case, only that cell will open.
You clicked on a cell that contains a zero. At that case, 8 surrounding cells will also open. And if any of those 8 is a zero, its surrounding cell will continue to be opened.
You clicked on a mine (number 9). Boom, you lose immediately.
Given a gameboard consisting of either a 9 (a mine) or a number from 0 to 8 (the number of mines surrounding), 
a boolean opening matrix tells us whether a cell is opened or not, 
and an array of moves on that gameboard. 
Your task is to return a boolean matrix of the gameboard's state after these moves. 
If there is a move that makes the player loses, return an empty matrix.

Example
For

gameboard = [[0,1,9,1],
             [0,1,2,2],
             [0,0,1,9],
             [0,0,1,1]]
opening = [[false,false,false,false], 
           [false,false,false,false], 
           [false,false,false,false], 
           [false,false,false,false]]
and moves = [[3,0]], the output should be

solution(gameboard, opening, moves) =
[[true,true,false,false], 
 [true,true,true,false], 
 [true,true,true,false], 
 [true,true,true,false]]
The only move was made at the bottom-left corner. Because the value is 0, its surrounding cells continue to spread:
*/

function mineSweeper(gameboard, opening, moves) {
    for (let m of moves) {
        if (gameboard[m[0]][m[1]] === 9) return [];
        else {  
            opening[m[0]][m[1]] = true;
        }
    }

    let k = 1;
    let m = opening.length, n = opening[0].length;
    while (k > 0) {
         k = 0;
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){               
                if (opening[i][j] === true && gameboard[i][j] === 0) {
                    for (let x = Math.max(i - 1, 0); x < Math.min(i + 2, m); x++){
                        for (let y = Math.max(j - 1, 0); y < Math.min(j + 2, n); y++){
                            if (opening[x][y] === false) {
                                k++;
                                opening[x][y] = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return opening;
    
}

console.log(mineSweeper(
[[0, 1, 9, 1],
[0, 1, 2, 2],
[0, 0, 1, 9],
[0, 0, 1, 1]], 
[[false, false, false, false],
[false, false, false, false],
[false, false, false, false],
[false, false, false, false]], [[3, 0]]));