/*
*Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
*/

function subArrayWithKDistinct(nums, k) {
    if (!nums.length) return 0;
    if (nums.length === k) {
        let set = new Set();
        nums.map(item => set.add(item));
        if (set.size() === 1) return 0;
    }

    function atMostK(K) {
        let start = 0, len = 0, count = {};
        for (let end = 0; end < nums.length; end++){
            if (!count[nums[end]]) {
                count[nums[end]] = 0;
            }
            if (count[nums[end]] === 0) K--;

            count[nums[end]] = count[nums[end]] + 1;

            while (K < 0) {
                count[nums[start]] -= 1;
                if (count[nums[start]] === 0) K++;
                start++;
            }
            len += end - start + 1;
        }
        return len;
    }

    return (atMostK(k) - atMostK(k - 1));

}

console.log(subArrayWithKDistinct([1, 2, 1, 2, 3], 2));