/*
* Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
           ____
           |  |
___        |  |
|  |       |  |
|  |       |  |      
|  |___    |  |       
|  |   |   |  |
|  |   |   |  |
|  |   |   |  |
|__|___|___|__|
  7  4   0   9    
Input:
N = 4
arr[] = {7,4,0,9}
Output:
10
Explanation:
Water trapped by above 
block of height 4 is 3 units and above 
block of height 0 is 7 units. So, the 
total unit of water trapped is 10 units.
*/

function finTrappedWater(arr, n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2 && arr[0] > arr[1]) return 0;
    if (n === 2 && arr[0] < arr[1]) return (arr[1] - arr[0]);

    let water = 0;
    let leftMAx = new Array(n);
    let rightMAx = new Array(n);
    leftMAx[0] = arr[0];
    rightMAx[n - 1] = arr[n - 1];

    for (let i = 1; i < arr.length; i++){
        leftMAx[i] = Math.max(arr[i], leftMAx[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--){
        rightMAx[i] = Math.max(arr[i], rightMAx[i + 1]);
    }

    for (let i = 0; i < arr.length; i++){
        water += Math.min(leftMAx[i], rightMAx[i]) - arr[i];
    }

    return water;
}

console.log(finTrappedWater([7, 4, 0, 9], 4));