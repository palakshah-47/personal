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

const findTotalPaintVal = (arr) => {
  const calculateMinCost = (map) => {
    let noOfBuildigs = [...map.get('buildingKey')].length;
    if (noOfBuildigs === 0) return;
    let dp = new Array(noOfBuildigs).fill(0).map((_) => new Array(3).fill(0));

    dp[0][0] = map.get('buildingKey').get(0)[0];
    dp[0][1] = map.get('buildingKey').get(0)[1];
    dp[0][2] = map.get('buildingKey').get(0)[2];

    for (let i = 1; i < noOfBuildigs; i++) {
      dp[i][0] =
        Math.min(dp[i - 1][1], dp[i - 1][2]) + map.get('buildingKey').get(i)[0];
      dp[i][1] =
        Math.min(dp[i - 1][0], dp[i - 1][2]) + map.get('buildingKey').get(i)[1];
      dp[i][2] =
        Math.min(dp[i - 1][0], dp[i - 1][1]) + map.get('buildingKey').get(i)[2];
    }
    return Math.min(
      dp[noOfBuildigs - 1][0],
      dp[noOfBuildigs - 1][1],
      dp[noOfBuildigs - 1][2]
    );
  };

  let buildingMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      console.log(arr[i][j]);
      if (buildingMap.has(`buildingKey`)) {
        let map = buildingMap.get(`buildingKey`);
        if (map.has(j)) {
          map.get(j).push(arr[i][j]);
        } else {
          buildingMap.get(`buildingKey`).set(j, [arr[i][j]]);
        }
      } else {
        let map = new Map();
        map.set(i, [arr[j][i]]);
        buildingMap.set(`buildingKey`, map);
      }
    }
  }
  console.log(buildingMap);
  console.log([...buildingMap.get('buildingKey')].length);

  return calculateMinCost(buildingMap);
};

console.log(
  findTotalPaintVal([
    [10, 11, 19, 100],
    [2, 3, 29, 200],
    [3, 5, 49, 300],
  ])
);

//2 + 5 + 19 + 200 = 226

// 2 + 3 + 19 + 100 = 124

//
// obj = {
//     0 : {
//         0 : [10, 2, 5],
//         1 : [13,8,7],
//         2: [26, 36, 57],
//         3: [136, 226, 326]
//     },

// }
