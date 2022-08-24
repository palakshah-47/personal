/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let counter = {};
    for(let i = 0; i < s.length; i++){
        counter[s[i]] = counter[s[i]] ? counter[s[i]] + 1 : 1;
    }   
    

    for(let i = 0; i < s.length; i++){
       if(counter[s[i]] && counter[s[i]] === 1){
          return i; 
       }         
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));