var longestOnes = function(nums, k) {
    let maxLength = 0, maxOnes = 0, start = 0;
    
    for(let end = 0; end < nums.length; end++){
        if(nums[end] === 0) maxOnes++;
        if(maxOnes > k){
            if(nums[start] === 0){
                maxOnes -= 1;             
            }
            start++;
        }
       maxLength = Math.max(maxLength, end-start + 1); 
    }
    
    return maxLength;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));