/*
*Given an array of integers heights representing the histogram's bar height 
where the width of each bar is 1, return the area of the largest rectangle in the histogram.
Input: heights = [2,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
        __6__
    _5__|   |
    |   |   |
    |   |   |   ___3_
 _2_|   |   |_2_|   |
|   |   |   |   |   |
|   |   |   |   |   |
0   1   2   3   4   

idea: check if the value at highest index in stack at top is greater than current element
if the value is greater than the crrent element val, popout the top index from stack and calculate max area:
if i = (i - stack[stack.length-1] -1 )
//because previous height is bigger than current height so that we can confirm that the next rectengle shrinks the area.
We need to calculate area backward so that we take i - last stack and as we need to go backward, we need to substract 1.

*/

function largestRect(arr) {
    if (!arr.length) return 0;
    if (arr.length === 1) return arr[0];
    let stack = [];
    let newArr = [...arr];
    newArr.push(-1);
    let maxArea = 0;

    for (let i = 0; i < newArr.length; i++){
        let j = stack.length - 1;
        while (j>=0 && newArr[stack[j]] > newArr[i]) {
            const h = stack.pop();
            j--;
            const otherIdx = j >= 0 ? stack[j] : -1;
            maxArea = Math.max((i - otherIdx - 1) * newArr[h], maxArea);
        }
        stack.push(i);

    }
    return maxArea;
}

console.log(largestRect([2, 5, 6, 2, 3]));
   