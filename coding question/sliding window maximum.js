/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [], start = 0;
    let partial = [];
    for(let end = 0; end < nums.length; end++){        
        partial.push(nums[end]);
        k--;        
        if(k <= 0 && start < nums.length){
           let temp = [...partial];
           res = [...res, temp];
           partial.splice(0, 1);
            start++;
            k++;
        }
    }
    let maxWindow = res.reduce((acc, val) => {        
        acc.push(Math.max(...val));
        return acc;
    }, []);
    return maxWindow;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));