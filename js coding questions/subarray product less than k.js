/*
* Given an array of integers nums and an integer k,
 return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;  
    // let sets = [];
    // function getSets(nums, prefix = [], set = [[]]){
    //    if(!nums.length) return;
    //    for(let i = 0; i < nums.length; i++){
    //        set.push(prefix.concat(nums[i]));
    //        getSets(nums.slice(i+1), prefix.concat(nums[i]), set);
    //    }
    //    return set;
    // }
    
    // sets = getSets(nums);
    // sets.forEach((arr) => {
    //     let prod = 1;
    //     arr.forEach((val) => {
    //         prod *= val;
    //     });
    //     if (prod !== 1 && prod < k) res++;
    // });

    let left = 0, right = 0;
    let prod = 1;
    while (right < nums.length) {
        prod *= nums[right];
        while (left < nums.length && prod >= k) {            
            prod /= nums[left];
            left++;
        }
        if (prod < k) {
            res += right - left + 1;
        }
        right++;
    }
    
    return res;
}; 

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));