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
block of arr 4 is 3 units and above 
block of arr 0 is 7 units. So, the 
total unit of water trapped is 10 units.
*/

function finTrappedWater(arr) {
  //   if (!arr.length || arr.length === 1) return 0;
  //   const n = arr.length;
  //   let water = 0;
  //   let leftMAx = new Array(n);
  //   let rightMAx = new Array(n);
  //   leftMAx[0] = arr[0];
  //   rightMAx[n - 1] = arr[n - 1];

  //   for (let i = 1; i < arr.length; i++) {
  //     leftMAx[i] = Math.max(arr[i], leftMAx[i - 1]);
  //   }

  //   for (let i = n - 2; i >= 0; i--) {
  //     rightMAx[i] = Math.max(arr[i], rightMAx[i + 1]);
  //   }

  //   for (let i = 0; i < arr.length; i++) {
  //     water += Math.min(leftMAx[i], rightMAx[i]) - arr[i];
  //   }

  //   return water;

  let leftMax = 0,
    rightMax = 0,
    left = 0,
    right = arr.length - 1,
    water = 0;

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= leftMax) {
        leftMax = arr[left];
      }
      water += leftMax - arr[left];
      left++;
    } else {
      if (arr[right] >= rightMax) {
        rightMax = arr[right];
      }

      water += rightMax - arr[right];
      right--;
    }
  }

  return water;
}

console.log(finTrappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
