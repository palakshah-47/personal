/**
 * @param {string} s
 * @return {boolean}
 * Given a binary string s, return true if the longest contiguous segment of 1's is strictly 
  longer than the longest contiguous segment of 0's in s, or return false otherwise.
 */
var checkZeroOnes = function(s) {
    let onesCnt = 0, zerosCnt = 0, maxOnes = 0, maxZeros = 0;
    for(let end = 0; end < s.length; end++){
        if(s[end] === "1") {
            onesCnt++;
            // if(maxZeros < zerosCnt) maxZeros = zerosCnt;
            zerosCnt = 0;
        }
        else{
            zerosCnt++;
            // if(maxOnes < onesCnt) maxOnes = onesCnt;
            onesCnt = 0;
        }
        
        maxOnes = Math.max(maxOnes, onesCnt);
        maxZeros = Math.max(maxZeros, zerosCnt);
    }
    return maxOnes > maxZeros ;
};

console.log(checkZeroOnes("111000"));