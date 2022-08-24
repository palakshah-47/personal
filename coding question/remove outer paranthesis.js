//Input: s = "(()())(())"
//Output: "()()()"
//Explanation: 
//The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
//After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// time O(n) space O(n)
var removeOuterParentheses = function(S) {
    let result = ''
    let level = 0
    
    for(const item of S) {
        if(item === ')') {
            level--
        }
        if(level >= 1) {
            result += item                
        }
        if(item === '(') {
            level++
        }
    }
    
    return result;
};

console.log(removeOuterParentheses("(()())(())"));