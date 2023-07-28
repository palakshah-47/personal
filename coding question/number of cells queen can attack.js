/*You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals).

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

Function Description

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

Returns
- int: the number of squares the queen can attack

Input Format

The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
The next line contains two space-separated integers  and , the queen's row and column position.
Each of the next  lines contains two space-separated integers  and , the row and column position of obstacle[i].

Sample Input 1

5 3
4 3
5 5
4 2
2 3
Sample Output 1

5 0 0 0 0 o
4 0 o q 0 0
3 0 0 0 0 0
2 0 o o 0 0
1 0 0 0 0 0
  1 2 3 4 5

10
Explanation 1

The queen is standing at position  on a  chessboard with  obstacles:



The number of squares she can attack from that position is . */

function queensAttack(n, k, r_q, c_q, obstacles) {
    const twoDArr = new Array(n).fill(0).map(()=> new Array(n).fill(0));
    let totalAttacks = 0;
    
    obstacles.forEach(v => twoDArr[v[0]-1][v[1]-1] = 1);

    const direction = (rowDir, colDir) => {
        let row = (r_q-1) + rowDir;
        let col = (c_q-1) + colDir;
        while(row <= n-1 && row >= 0 && col <=n-1 && col >= 0){
            if(twoDArr[row][col] === 1) break;
              totalAttacks++;
              row += rowDir;
              col += colDir;
              
        }
    }
    
    direction(1,1);
    direction(1,0);
    direction(0,1);
    direction(-1,0);
    direction(0,-1);
    direction(-1,-1);
    direction(-1,1);
    direction(1,-1);
    
    return totalAttacks;    

}

console.log(queensAttack(5, 3, 4, 3, [[5,5],[4,2],[2,3]]));