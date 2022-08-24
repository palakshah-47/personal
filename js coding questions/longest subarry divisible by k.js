/**
 * Given an array containing N integers and a positive integer K, 
 * find the length of the longest sub array with sum of the elements divisible by the given value K.
 * Input:
    A[] = {-2, 2, -5, 12, -11, -1, 7}
    K = 3
    Output: 5
    Explanation:
    The subarray is {2,-5,12,-11,-1} with
    sum -3, which is divisible by 3.    
 */

function longestSubarrDivisableByK(arr, n, k) {
    let i = 0, maxlen = Number.MIN_VALUE;
    let sum = 0, map = new Map();
    for (let j = 0; j < arr.length; j++){
        sum += arr[j];
        let rem = sum % k;
        if (rem < 0) rem = rem + k;
        if (rem === 0) maxlen = Math.max(maxlen, j + 1);
        if (!map.has(rem)) map.set(rem, j);
        else maxlen = Math.max(maxlen, j - map.get(rem));
    }
    return maxlen;
 }
 
console.log(longestSubarrDivisableByK([-2, 2, -5, 12, -11, -1, 7], 7, 3));