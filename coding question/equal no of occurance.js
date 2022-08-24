/*
/Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
*/

var areOccurrencesEqual = function(s) {
    let counter = {};
    
    s.split("").forEach(char => {
        counter[char] = counter[char] + 1 || 1;
    });
    
    return new Set(Object.values(counter)).size === 1;
    
};

console.log(areOccurrencesEqual("aaabb"));
