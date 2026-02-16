/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // [1,3,-1,-3,5,3,6,7]
    const res = [];
    const deque = [];
    for(let right = 0; right < nums.length; right++) {      
        // Remove indices whose corresponding values are less than nums[right]
        while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }
        deque.push(right);
        // Remove indices that are out of the current window
        const left = right - k + 1;
        if(deque[0] < left) {
            deque.shift();
        }
        // If we have processed at least k elements, add the maximum to result
        if(right >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    return res;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));