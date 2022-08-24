/*
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    if(!p.length) return res;
    if(p.length > s.length) return res;
  
//     let left = 0;
//     let right = p.length;
    
//     while(left < s.length){
//         let temp = s.substring(left, right);
//         if(temp.split("").sort().join("") === p.split("").sort().join("")){
//             res.push(left);
//         }
//         left++;
//         right++;
//     }
//     return res;
    
    function checkAnagram(subStr, p, counter) {       
        
        for(let j = 0; j < subStr.length; j++){
            if(!(counter[subStr[j]])) return false;
            else{
                counter[subStr[j]] -= 1;                
            }
        }
        if(Object.values(counter).every(val => val !== 0)) return false;
        return true;
    }

      let originalCounter = {};
        for(let i = 0; i < p.length; i++){
           originalCounter[p[i]] = originalCounter[p[i]] ? originalCounter[p[i]] + 1 : 1;
        }
    
    for(let i = 0; i <= s.length-p.length; i++){
        counter = {...originalCounter};
        if(checkAnagram(s.substring(i, i + p.length), p, counter)){
            res.push(i);
        }
    }
    return res;

    // let arr = Array(26).fill(0);
    
    // for(let i = 0; i < p.length; i++){
    //     arr[p.charCodeAt(i) - 97]++;
    // }
    
    // let start = 0, end = 0;
    
    // while(end < s.length){
    //     if(arr[s.charCodeAt(end) - 97] > 0){
    //         arr[s.charCodeAt(end++) - 97]--;
    //          if(end-start === p.length){
    //             res.push(start);
    //         }
    //     }
       
    //     else if(start === end){
    //         start++;
    //         end++;
    //     }
    //     else{
    //         arr[s.charCodeAt(start++) - 97]++;
    //     }
    // }
    // return res;
    
};

console.log(findAnagrams("cbaebabacd", "abc"));