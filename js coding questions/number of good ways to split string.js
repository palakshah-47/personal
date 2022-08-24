/*
You are given a string s.

A split is called good if you can split s into two non-empty strings sleft and sright 
where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft 
and sright is the same.

Return the number of good splits you can make in s.
*Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
*/

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    if(!s.length) return 0;
    if(s.length === 1) return 0;
    if(s.length === 2 && s[0] === s[1]) return 0;
    if(s.length === 2 && s[0] !== s[1]) return 1;
    let count = 0;
    
    let l2r = new Array(s.length);
    let r2l = new Array(s.length);
    
    let set = new Set();
    
    for(let i = 0; i < s.length; i++){
        set.add(s[i]);
        l2r[i] = set.size;
    }
    
    set = new Set()
    for(let i = s.length-1; i >=0; i--){
        set.add(s[i]);
        r2l[i] = set.size;
    }
    
    
    for(let i = 1; i < s.length; i++){
        if(l2r[i-1] === r2l[i]) count++;
    }
     return count;
};

console.log(numSplits("aacaba"));