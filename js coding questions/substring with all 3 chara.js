/*
*  Number of Substrings Containing All Three Characters
Given a string s consisting only of characters a, b and c.
Return the number of substrings containing at least one occurrence of all these characters a, b and c.
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
*/

const numberOfSubStrings = (s) => {
    if (!s.length || s.length < 3) return 0;
    let start = 0, obj = Array(3).fill(0), res = 0;
    for (let end = 0; end < s.length; end++){
        obj[s.charCodeAt(end) - 97]++;

        while (obj[0] > 0 && obj[1] > 0 && obj[2] > 0) {
            res += s.length - end;
            obj[s.charCodeAt(start) - 97]--;
            start++;
        }
    }
    return res;
}

console.log(numberOfSubStrings("abcabc"));