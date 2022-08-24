/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length) return [[""]];
    if(strs.length === 1) return [[strs[0]]];
    
    let res = [];
    let anagrams = {};
    
    for(let word of strs){
        let letters = word.split("").sort().join("");
        anagrams[letters] = anagrams[letters] || [];
        anagrams[letters].push(word);        
    }
    
    Object.values(anagrams).forEach((value) => {
        res.push(value);
    });
    
    return res;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));