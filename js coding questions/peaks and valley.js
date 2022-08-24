/**
 * You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.
 * Input: nums = [2,4,1,1,6,5]
   Output: 3 
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let res = 0;
    
    let uniquenums = [nums[0]];
    
    
    for(let i = 0; i < nums.length; i++){
        let temp = uniquenums[uniquenums.length-1];
        if(nums[i] !== temp) uniquenums.push(nums[i]);
    }

       
      function isPeak(i, num, j){
          if(i >=0 && uniquenums[i] > num) return false;
          if(j < uniquenums.length && uniquenums[j] > num) return false;
          return true;
      }
    
      function isValley(i, num, j){
          if(i >= 0 && uniquenums[i] < num) return false;
          if(j < uniquenums.length && uniquenums[j] < num) return false;
          return true;
      }
    
    for(let i = 1; i < uniquenums.length-1; i++){
        let num = uniquenums[i];
        if(isPeak(i-1, num, i+1)) res++;
        if(isValley(i-1, num, i+1)) res++;
    }
    
    
    return res;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5]));