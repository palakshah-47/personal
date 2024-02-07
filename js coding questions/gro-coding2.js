/*
// Daily temperatures 
// Given an array of integers temperatures that represent the daily temperatures, return an array result 
// such that result[i] is the number of days you have to wait after the i-th day to get a warmer temperature. 
// If there is no future day for which this is possible, keep result[i] equal to 0 as default.
// For example, daily temperatures [73, 74, 76, 71, 69, 72, 78, 73] 
//should return a result = [1, 1, 4, 2, 1, 1, 0, 0];

*/

const findTempDiff = (arr) => {
  if (arr.length === 0) return [];
  let result = new Array(arr.length).fill(0);

  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      let topElm = stack.pop();
      result[topElm] = i - topElm;
    }
    stack.push(i);
  }
  // let resultArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let diff = 0;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] > arr[i]) {
  //       diff = j - i;
  //       break;
  //     }
  //   }
  //   result.push([[arr[i]], [diff]]);
  // }
  // console.log(result);
  // resultArr = result.reduce((acc, elm) => {
  //   acc.push(...elm[1]);
  //   return acc;
  // }, []);

  // return resultArr;
  return result;
};

console.log(findTempDiff([73, 74, 76, 71, 69, 72, 78, 73]));
