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
  let noOfBuildings = arr[0].length;
  let res = 0;
  let buildingObj = {};

  for (let j = 0; j < noOfBuildings.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      let obj = {};
      obj[j] = [arr[j][i]];
      buildingObj[i] = obj;
    }
  }
  console.log(buildingObj);
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
//         1 : [11,3,5],
//         2: [19, 29, 49],
//         3: [100, 200, 300]
//     },

// }
