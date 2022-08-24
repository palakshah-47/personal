var maxProduct = function(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
};

console.log(maxProduct([-10,10,-10,10]));