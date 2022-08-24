/*
* Given a dictionary of distinct words and an M x N board where every cell has one character. 
Find all possible words from the dictionary that can be formed by a sequence of adjacent characters on the board. 
We can move to any of 8 adjacent characters
Note: While forming a word we can move to any of the 8 adjacent cells. A cell can be used only once in one word.
Input: 
N = 1
dictionary = {"CAT"}
R = 3, C = 3
board = {{C,A,P},{A,N,D},{T,I,E}}
Output:
CAT
Explanation: 
C A P
A N D
T I E
Words we got is denoted using same color.
*/

const wordBoggle = (board, dictionary) => {
    const ROW_NUM = board.length, COL_NUM = board[0].length;

    let res = [];
    for(let i = 0; i < dictionary.length; i++){
        let word = dictionary[i];
        if (exist(board, word)) res.push(word);        
    }
    return res;
    
    function callDFS(r, c, idx, word) {
        if(word.length === idx) return true;
        if (r >= ROW_NUM || r < 0 || c < 0 || c >= COL_NUM || board[r][c] != word[idx]) return false; 
                    
        board[r][c] = '#'; // mark as visited
        
        if (callDFS(r - 1, c - 1, idx + 1, word) ||
            callDFS(r - 1, c, idx + 1, word) ||
            callDFS(r - 1, c + 1, idx + 1, word) ||
            callDFS(r, c - 1, idx + 1, word) ||
            callDFS(r, c + 1, idx + 1, word) ||
            callDFS(r + 1, c - 1, idx + 1, word) ||
            callDFS(r + 1, c + 1, idx + 1, word) ||
            callDFS(r + 1, c, idx + 1, word)) return true;
            
           board[r][c] = word[idx]; // reset the board       

    }
    
    function exist(board, word) {
        for(let r = 0; r < ROW_NUM; r++) {
            for(let c = 0; c < COL_NUM; c++) {
                if(board[r][c] === word[0] && callDFS(r, c, 0, word)) return true;
            }
        }
        return false;  
    }
      
};

// console.log(wordBoggle([['G', 'I', 'Z'], ['U', 'E', 'K'], ['Q', 'S', 'E']], ["GEEKS", "FOR", "QUIZ", "GO"]));
console.log(wordBoggle([['d', 'd'],['b', 'f'], ['e', 'c'], ['b','c'], ['d','c']], ['bcd', 'db']));