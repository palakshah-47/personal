/*
* Given input, a sequence of characters, your task is to find the longest subsequence that is a palindrome.

In other words, you need to find the longest set of characters
(not necessarily contiguous, but in the same order they appear in input) that reads the same backwards and forwards.

The string consists of uppercase English letters and spaces, but we will be ignoring the spaces.

If there's a tie for the longest palindrome subsequence, return the one that would appear first when reading left to right.

Example

For input = "ABCCBDDCE", the output should be solution(input) = "BCCB".

The subsequence "CDDC" is also a palindrome of length 4, but "BCCB" appears earlier in the string, 
so it's the correct answer.

For input = "STAR DESTROYER", the output should be solution(input) = "RESER".

There are many possible ways to form a palindrome subsequence of length 5, as there are many characters that could be used between the "RE" and "ER" ("RESER", "RETER", "RERER", "REOER", or "REYER"). Since "RESER" appears earliest, it's the one we choose.
*/

function longestSubSeqLen(s) {
    let maxLen = 0;
    s = s.split(" ").join("");
    if (s.length <= 1) return s;
    if (s.length === 2 && s[0] === s[1]) return s;
    let dp = new Array(s.length).fill().map(_ => new Array(s.length).fill(""));
    
    function isPalindrome(start, end) {
        if (dp[start][end]) return dp[start][end];
        //no match found then start > end
        else if (start > end) dp[start][end] = 0;
        // if only one match found
        else if (start === end) dp[start][end] = 1;
        else if (s[start] === s[end]) dp[start][end] = isPalindrome(start + 1, end - 1) + 2;
        else {                   
            dp[start][end] = Math.max(isPalindrome(start + 1, end), isPalindrome(start, end - 1));
        }
        return dp[start][end];
    }

    let res = isPalindrome(0, s.length - 1);
    console.log(dp);
    return res;
}

function findLogestPalindromSubSeq (input) {
    input = input.split(" ").join("");
    // input = input.replace(/ /g, ``)
    
    let t = new Array(input.length).fill().map(_ => Array(input.length));    
    // let path = new Array(input.length).fill().map(_ => Array(input.length));
    
    // for(let q = 1; q <= seq.length+1; q++) {
    //     for(let i = 0; i < seq.length - q-1 ; i++) {
    //         let j = i + q ;
    //         if(seq[i] === seq[j] && q === 1)
    //             t[i][j] = seq[i];
    //         else if(seq[i] === seq[j] && q === 2)
    //             t[i][j] = seq[i] + seq[i];
    //         else if(seq[i] === seq[j]) 
    //             t[i][j] = seq[i] + t[i + 1][j - 1] + seq[j];
    //         else {
    //             const a = t[i][j - 1];
    //             const b = t[i+1][j];

    //             if(a.length >= b.length) {
    //                 t[i][j] = a;
    //             } else {
    //                 t[i][j] = b;
    //             }
    //         }
            
    //     }
    // }

    function checkPalindrome(i, j) {   
        if (t[i][j]) return t[i][j];

        if (i > j) t[i][j] = "";
        
        else if (i === j) {
            // path[i][j] = i;
            t[i][j] = input[i];
        }
        else if (input[i] === input[j]) {
            // path[i][j] = i;
            t[i][j] = input[i] + checkPalindrome(i + 1, j - 1) + input[j];
        }
        else {
            let x = checkPalindrome(i + 1, j);
            let y = checkPalindrome(i, j - 1);
            if (x.length > y.length || x.length === y.length) {
                // path[i][j] = path[i + 1][j];
                t[i][j] = x;
            } else {
                // path[i][j] = path[i][j-1];
                t[i][j] = y;
            }
         }
         return t[i][j];
    }

    checkPalindrome(0, input.length - 1);
    //  console.log(t);
    //  return res;
    
    let arr =  t.map((r) => {
        let arr1 = r.reduce((a, b) => a.length >= b.length ? a : b);
        return arr1;
    }).reduce((a, b) => a.length >= b.length ? a : b);
    return arr;
   
};

function countPalindromeSubstring(s) {
    let n = s.length;
    let dp = new Array(n).fill(-1).map(_ => new Array(n).fill(-1));
    function isPalindrome(s, i, j) {
        if (i > j) return 1;
        if (dp[i][j] !== -1) return dp[i][j];
        if (s[i] !== s[j]) return dp[i][j] = 0;
        return dp[i][j] = isPalindrome(s, i + 1, j - 1);
    }

    let count = 0;
    for (let i = 0; i < s.length; i++){
        for (let j = i + 1; j < n; j++){
            if (isPalindrome(s, i, j) !== 0) count++;
        }
    }
    console.log(dp);
    return count;
}

//  console.log(longestSubSeqLen("ABCCBDDCE"));
//  console.log(findLogestPalindromSubSeq("ABCCBDDCE"));
//  console.log(countPalindromeSubstring("ABCCBDDCE"));