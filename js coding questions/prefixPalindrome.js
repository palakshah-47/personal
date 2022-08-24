/*
* Given a string:
1.) Take all prefixes of the string and choose the longest palindrome between them.
2.) If chosen prefix has atleast two characters, cut this from s and go back to step 1 
with the updated string. Otherwise, end the algo with the current string s.
ex: 
s1 = 'aaacodedoc'
output = "", first prefix 'aaa' so trim it and second prefix = 'codedoc', so again trim it, return value = ""
s2 = 'codesignal', first prefix is 'c', which is less than 2, so return value = 'codesignal'
*/

function solution(s) {  
   
    if(s.length == 0) return "";
    let pre = getPrefixPalindrome(s);
    if(pre.length > 1){
        return solution(s.substring(pre.length));
    }else return s;
        
    
    function getPrefixPalindrome(s) {
        let temp = s + "?";
        s = s.split("").reverse().join("");
        temp += s;
    
        let n = temp.length;
        let lps = new Array(n).fill(0);

        for(let i = 1; i < n; i++){
            //length of longest prefix till less than 1 index i
            let len = lps[i-1];
            while(len > 0 && temp[len] !== temp[i]){
                len = lps[len-1];
            }
            if(temp[i] === temp[len]) {
                len++;
                // count++; 
            }
            lps[i] = len;    
        }
       return temp.substring(0, lps[n - 1]);
    }
    
    
}

 console.log(solution("aaacodedoc"));
// console.log(solution("codesignal"));