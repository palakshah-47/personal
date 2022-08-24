/*
Given an integer array nums and an integer k, 
return the length of the shortest non-empty subarray of nums with a sum of at least k. 
If there is no such subarray, return -1.

A subarray is a contiguous part of an array.
Input: nums = [2,-1,2], k = 3
Output: 3
* Because the array contains negative values, sliding window max technique will not work here. We will need to implement
monotonic queue.
*/
class Dequeue {
    values = [];
    constructor(values) {
        if (values) this.values = values;
    }

    size = () => this.values.length;

    isEmpty = () => this.size() === 0;

    front = () => this.values[0];
    back = () => this.values[this.size() - 1];

    push_front = (x) => this.values.unshift(x);

    push_back = (x) => this.values.push(x);

    pop_front = () => this.values.shift();

    pop_back = () => this.values.pop();
}

function minSubArrayWithK(nums, k) {
    if (!nums.length) return -1;
    if (nums.length === 1 && nums[0] > k) return 1;
    let min = Number.MAX_VALUE;

    let P = [0];
    let q = new Dequeue();

    for (let i = 0; i < nums.length; i++) {
        P[i + 1] = P[i] + nums[i];    
        q.push_back(i);
        while (P[i + 1] - P[q.front()] >= k) {
            min = Math.min(min, i + 1 - q.pop_front());
        }
        while (P[q.back()] >= P[i + 1]) q.pop_back();
       
    }
     return min === Number.MAX_VALUE ? -1 : min;
}

console.log(minSubArrayWithK([84,-37,32,40,95], 167))