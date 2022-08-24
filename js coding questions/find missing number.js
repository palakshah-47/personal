/*
* Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
*/

function missingNo(nums) {
//    let len = nums.length;
//     if(nums.indexOf(len) === -1) return len;
//     nums.sort((a,b) => a-b);
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== i){
//             return i;
//         }
//     }
//     return -1;
    let xor = nums.length;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ i ^ nums[i];
    }
    return xor;

    // let sum = nums.length;
    // for (let i = 0; i < nums.length; i++){
    //     sum += i - nums[i];
    // }
    // return sum;
}

console.log(missingNo([3, 0, 1]));