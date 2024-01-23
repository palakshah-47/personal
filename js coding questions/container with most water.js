/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
        ___ ------------------------------------------------|
8       |  |                                             ___|
7       |  |    ___                                     |   |
6       |  |    |  |                                    |   |
5       |  |    |  |                                    |   |
4       |  |    |  |                                    |   |
3       |  |    |  |    ___                             |   |
2___    |  |    |  |    |  |                            |   |
1| |    |  |    |  |    |  |                            |   |
0| |    |  |    |  |    |  |                            |   |
  1      8       6       2  ............................  7
*/

//The trick here is to calculate rectengle area with 2 pointers from left and right with the min value
// and consider the height with current number

const maxArea = (height) => {
  if (!height.length || height.length === 1) return 0;
  let left = 0,
    right = height.length - 1;
  let res = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, area);
    if (height[left] < height[right]) left++;
    else {
      right--;
    }
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
