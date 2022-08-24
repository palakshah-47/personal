/*
* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
we create 2 arrays:

1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.

In right array, we'll have mutiple of right elements ahead of that index.

So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

Result = [24, 12, 8, 6]

1 array 
*/

function productExceptSelf(nums) {
    if (nums === null || nums.length <= 1) return [];
    let left = 1, right = 1;
    let leftArr = []
    let rightArr = [];
    for (let i = 0; i < nums.length; i++){
        leftArr[i] = left;
        left *=  nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--){
        rightArr[i] = right;
        right *= nums[i];
        rightArr[i] *= leftArr[i];//this additional step saves us from having another iteration. We can do the multiplication at the spot.
    }

    return rightArr;
}

console.log(productExceptSelf([1, 2, 3, 4]));