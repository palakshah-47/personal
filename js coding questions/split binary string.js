/*
* Given binary string str, the task is to count the total number of ways to split the given string into three non-overlapping substrings having the same number of 0s.

Examples:

Input: str = “01010” 
Output: 4 
Explanation: 
The possible splits are: [0, 10, 10], [01, 01, 0], [01, 0, 10], [0, 101, 0]

Input: str = “11111” 
Output: 0
*/

function waysToSplitBinary(s) {
    let count = 0;
    s.split("").forEach(element => {
        count += element === '0' ? 1 : 0;
    });

    if (count === 0) return 0;
    if (count % 3 !== 0) return 0;

    let res = 0, k = count / 3, sum = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++){
        sum += (s[i] === '0') ? 1 : 0;
        if (sum === 2 * k && map.has(k) && i < s.length - 1 && i > 0) {
            res += map.get(k);
        }

        if (map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    return res;
}

console.log(waysToSplitBinary("01010"));