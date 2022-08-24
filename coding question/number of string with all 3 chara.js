/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let start = 0, obj = {'a': 0, 'b': 0, 'c': 0}, res = 0;
    for(let end = 0; end < s.length; end++){
        obj[s[end]]++;
        
        while(obj['a'] > 0 && obj['b']>0 && obj['c']>0){            
            obj[s[start]]--;
            start++;
        }

        res  = Math.max(res, end-start);
    }
    return res;
};
console.log(numberOfSubstrings("aaacb"))