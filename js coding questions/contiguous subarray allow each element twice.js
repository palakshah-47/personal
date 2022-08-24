/*
* Given an array A, count the number of consecutive contiguous subarrays such that each element in the subarray appears
 at least twice.
Example:

A = [0,0,0]
The answer should be 3 because we have

A[0..1] = [0,0]
A[1..2] = [0,0]
A[0..3] = [0,0,0]
Another example:

A=[1,2,1,2,3]
The answer should be 1 because we have:

A[0..3] = [1,2,1,2]
*/

function contiguousSubArrayWithTwice(s) {
    let maxUnique = new Set(s).size;
    if (maxUnique === 1) return s.length;
    let max = 0, k = 2;
    
    for (let i = 1; i <= maxUnique; i++){
        let left = 0, right = 0, currChar = 0, reachedK = 0;
        let map = new Map();

        while (right < s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            //increment currChar count as we found each unique char
            if (map.get(s[right]) === 1) currChar++;
            //increment recahedK count if equals k as we met criteria
            if (map.get(s[right]) === k) reachedK++;

            //if currChar holds more than 1 char then shrink window
            while (currChar > i) {
                //since shrinking we want to reduce count to make room for another char
                if (map.get(s[left]) >= k) reachedK--;
                map.set(s[left], map.get(s[left]) - 1);
                //since shrinking we want to remove previous char and should have cur char
                if (map.get(s[left]) === 0) currChar--;
                left++;
            }
            if (currChar === reachedK) {
                max = Math.max(max, right - left + 1);
            }
            right++;
        }
       
    }
     return max;

}

console.log(contiguousSubArrayWithTwice([1, 2, 1, 2, 3]));