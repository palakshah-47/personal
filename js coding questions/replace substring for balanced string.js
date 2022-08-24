/*
*You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', and 'R'.

A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.
Input: s = "QQQW"
Output: 2
Explanation: We can replace the first "QQ" to "ER". 

*/

const balancedString = (s) => {
    if (!s.length || s.length < 4) return 0;
    //define 2 objects, one to fill the string and one for extra chars and incrment extra counter
    let map = {}, extra = {}, extraCount = 0
    let maxNum = s.length / 4;
    for (let i = 0; i < s.length; i++){
        if (!map[s[i]]) map[s[i]] = 1;
        else {
            map[s[i]] = map[s[i]] + 1;
        }
        

        if (map[s[i]] > maxNum) {
            extra[s[i]] = extra[s[i]] !== undefined ? extra[s[i]] + 1 : 1;
            extraCount++;
        }
    }

    if (!extraCount) return 0;

    let start = 0, end = 0, minlen = Number.MAX_VALUE;

    while (end < s.length) {
        if (extra[s[end]] !== undefined) {
            extra[s[end]]--;
            if (extra[s[end]] >= 0) extraCount--;
        }
        while (!extraCount) {
            minlen = Math.min(minlen, end - start + 1);
            let cur = extra[s[start]];
            if (cur !== undefined) {
                if (cur === 0) extraCount++;
                extra[s[start]]++;
            }
            start++;
        }
        end++;
    }
    return minlen;
}

console.log(balancedString("QQQW"));