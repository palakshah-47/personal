/*
You have been given 2D array of integers as an input. 1 D represents number of buildings and second dimension represents colors. There are only three colors but n buildings. So, to paint each building you have three choices of colors. Cost of painting building with three different colors is input in an array. as int[][] mat = {{10,11,19,100},{2,3,29,200},{3,5,49,300}};
 
find what is the cheapest cost to paint all the buildings.
 
{{10,11,19,100},
{2,3,29,200},
{3,5,49,300}}
 
 
 
Conditions:
- No two adjacent buildings can be painted with the same color
Time complexity: O(n)
Space complexity: O(m)
n - no of buildings (represented as columns in the input array)
m - no of colors (represented as rows in the input array)
*/

findMinCostToPaint = (arr) => {
  const N = arr[0].length;
  if (N === 0) return;
  let newArr = arr;
  if (N > 3) {
    newArr = arr[0].map((col, i) => arr.map((row) => row[i]));
  }
  console.log(newArr);

  let dp = new Array(N).fill(0).map((_) => new Array(3).fill(0));
  dp[0][0] = newArr[0][0];
  dp[0][1] = newArr[0][1];
  dp[0][2] = newArr[0][2];

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + newArr[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + newArr[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + newArr[i][2];
  }

  return Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
};

console.log(
  findMinCostToPaint([
    [10, 11, 19, 100],
    [2, 3, 29, 200],
    [3, 5, 49, 300],
  ])
);
