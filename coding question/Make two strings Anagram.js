/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * return no of steps to make 2 strings anagram
 */
var minSteps = function(s, t) {
    if(s.length !== t.length) return s.length;
    let counter = {}
    for(let i = 0; i < s.length; i++){
        counter[s[i]] = (counter[s[i]] + 1) || 1;       
    }
    let changes = 0; 
    for(let j = 0; j < t.length; j++){
        if(!(counter[t[j]])){
            changes++;
        } else{
            counter[t[j]] -= 1;
            
        }
    }    
   return changes;
   
};

console.log(minSteps("leetcode", "practice"));