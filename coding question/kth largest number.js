var findKthLargest = function(nums, k) { 
    // nums.sort((a,b)=> b-a);
    // return nums[k-1];
    if(nums.length-1 < k){
        let sorted = nums.sort((a,b) => a-b);
        return sorted[sorted.length-k];
    }
    let minHeap = [];
    let n = nums.length;
    
    for(let i = 0 ; i < k; i++){
        minHeap.push(nums[i]);
    }
    
    for(let i = k; i < n; i++){
        minHeap.sort((a,b) => a-b);
        
        if(minHeap[minHeap.length-k] > nums[i]){
            continue;
        } else{
            minHeap.reverse();
            minHeap.pop();
            minHeap.reverse();
            minHeap.push(nums[i]);
        }
    }
    return minHeap[k-1];
};

console.log(findKthLargest([3,2,1,5,6,4], 2))