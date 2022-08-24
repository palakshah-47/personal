/*
* let's try Minesweeper!
Each cell of Minesweeper gameboard can be:
a mine (appears as 9)
or a number representing the number of mines in its surrounding cells
(a cell is considered as surrounding another cell when this cell meets that cell on at least 1 corner) (appears as 0 - 8)
Your task is to check whether a gameboard is a valid gameboard.

Example
For

gameboard = [[0, 1, 9, 1],
             [0, 1, 1, 1],
             [0, 0, 0, 0]]
the output should be
solution(gameboard) = true.
*/

n = x => Number(x)

solution = g => {
    for (i in g) {
        console.log("i: " + i);
        for (j in g[i]) {
            console.log("j: " + j);
            if (g[i][j] != 9) {
                s = 0
                for (x = Math.max(n(i) - 1, 0); x < Math.min(n(i) + 2, g.length); x++) {
                    console.log("x: " + x);
                    for (y = Math.max(n(j) - 1, 0); y < Math.min(n(j) + 2, g[i].length); y++) {
                         console.log("y: " + y);
                        s += (g[x][y] == 9) ? 1 : 0 
                        console.log("s: " + s);
                    }
                }   
                if (s != g[i][j]) {
                    return false
                }
            }
        }
    }
    return true
}



console.log(solution(
[[0, 0, 0, 0, 0], 
 [0,1,1,1,0], 
 [0,1,9,1,0], 
 [0,1,1,1,0], 
 [0,0,0,0,0]]));
 
 solution = (g, o, m) => {
    for (x of m) {
        if (g[x[0]][x[1]] == 9) {
            return []
        } else {
            o[x[0]][x[1]] = true
        }
    }
    
    m = Math
    n = Number
    
    k = 1
    while (k > 0) {
        k = 0
        for (i in o) {
            for (j in o[i]) {
                if (o[i][j] == 1 && g[i][j] == 0) {
                    for (x = m.max(i - 1, 0); x < m.min(n(i) + 2, o.length); x++) {
                        for (y = m.max(j - 1, 0); y < m.min(n(j) + 2, o[i].length); y++) {
                            if (o[x][y] == 0) {
                                k++
                                o[x][y] = true
                            }
                        }
                    }
                }
            }
        }
    }
    
    return o
}
