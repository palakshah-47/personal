/**
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
 */

function isAlienSorted(words, order) {
     let alp = new Map();
    for(let i = 0; i < order.length; i++){
        alp.set(order[i], i);
    }
    
    function wordsSorted(s1, s2){                  
                if(alp.get(s1[0]) > alp.get(s2[0])) {
                    return false;
                } else if(s1[0] === s2[0]){
                    let pointer = 1;
                    while (s1[pointer] === s2[pointer] && pointer < s1.length - 1) pointer++;
                    console.log(alp.get(s1[pointer]));
                    console.log(alp.get(s2[pointer]));
                    if (alp.get(s1[pointer]) > alp.get(s2[pointer])) {
                        return false;
                    }               
                } 
        return true;
        
    }
    
    for (let i = 0; i < words.length - 1; i++){       
        if(!wordsSorted(words[i], words[i+1])) return false;
        return true;
    }
}
 
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));