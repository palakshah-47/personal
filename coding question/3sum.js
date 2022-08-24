//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0

function threeSum(nums) {
    let resultArr = [];
    
    if(!nums.length || nums.length === 1) return resultArr;
    
    nums.sort((a,b) => a - b);
    // [-4,-1,-1,0,1,2]

     for(let i = 0; i < nums.length - 2; i++){
         // if(nums[i] > 0) return resultArr;         
         let j = i+1;
         let k = nums.length -1;
         let sum = 0
         while(j < k) {
             sum = nums[i] + nums[j] + nums[k];
             if(sum === 0){
                 resultArr.push([nums[i], nums[j], nums[k]]);
                 while(nums[j+1] === nums[j]) j++;
                 while(nums[k-1] === nums[k] ) k--;
                 j++;
                 k--;
             } else if(sum < 0){
                 j++;
             } else {
                 k--;
             }
             
         }       
         
         while(nums[i] === nums[i+1]) i++;
     }
    
    return resultArr;
    
};

console.log(threeSum([-1,0,1,2,-1,-4]));