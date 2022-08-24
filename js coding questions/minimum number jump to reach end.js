/*
* Given an array of N integers arr[] where each element represents the max number of steps 
that can be made forward from that element. Find the minimum number of jumps to reach 
the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
Note: Return -1 if you can't reach the end of the array.
Input:
N = 11 
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
Output: 3 
Explanation: 
First jump from 1st element to 2nd 
element with value 3. Now, from here 
we jump to 5th element with value 9, 
and from here we will jump to last. 
*/
function minJumps(arr, n) {
    if (!arr.length || arr[0] === 0) return -1;
    if (n === 1) return 0;
    let steps = arr[0], jump = 1, maxReach = arr[0];
    for (let i = 1; i < arr.length; i++){
        //if last element then return the 
        if (i === n - 1) return jump;
        //update max possible 
        maxReach = Math.max(maxReach, arr[i] + i);
        steps--;
        //if current step is 0 then move to next jump and update steps with reachable max index - current index
        if (steps === 0) {
            jump++;
            if (i >= maxReach) return -1;
            steps = maxReach - i;
        }
    }
}

// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11));
console.log(minJumps([1, 4, 3, 2, 6, 7], 6));
// console.log(minJumps([0, 46, 46, 0, 2, 47, 1, 24, 45, 0, 0, 24, 18, 29, 27, 11, 0, 0, 40, 12, 4, 0, 0, 0, 49, 42, 13, 5, 12, 45, 10, 0, 29, 11, 22, 15, 17, 41, 34, 23, 11, 35, 0, 18, 47, 0, 38, 37, 3, 37, 0, 43, 50, 0, 25, 12, 0, 38, 28, 37, 5, 4, 12, 23, 31, 9, 26, 19, 11, 21, 0, 0, 40, 18, 44, 0, 0, 0, 0, 30, 26, 37, 0, 26, 39, 10, 1, 0, 0, 3, 50, 46, 1, 38, 38, 7, 6, 38, 27, 7, 25, 30, 0, 0, 36, 37, 6, 39, 40, 32, 41, 12, 3, 44, 44, 39, 2, 26, 40, 36, 35, 21, 14, 41, 48, 50, 21, 0, 0, 23, 49, 21, 11, 27, 40, 47, 49]));