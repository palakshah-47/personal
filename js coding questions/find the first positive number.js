/*
* Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.
Input: nums = [3,4,-1,1]
Output: 2
*/

function findMissingPositive(nums) {
    //first loop through all elements and replace all values at i-1 index from i index for positive values
    for (let i = 0; i < nums.length;){
        if (nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            ++i;
        }
    }

    for (let i = 0; i < nums.length; ++i){
        if (nums[i] !== i+1) {
            return i + 1;
        }
    }
    return nums.length + 1;
}

console.log(findMissingPositive([3, 4, -1, 1]));