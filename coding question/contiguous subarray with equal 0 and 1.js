/**
* Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let count = 0, maxLength = 0, obj = {};
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 0) count--;
        else count++;      
        
        if(count === 0) maxLength = i+1;       
        
        if(count in obj){
            maxLength = Math.max(maxLength, i - obj[count]);
        } else {
            obj[count] = i;
        }       
        
    }
    return maxLength;
};

console.log(findMaxLength([0,1,0,1]));