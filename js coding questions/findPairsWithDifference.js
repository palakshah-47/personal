/*
* Given an array arr of distinct integers and a nonnegative integer k, 
write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, s
uch that x - y = k. If no such pairs exist, return an empty array.
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []
*/

function findPairsWithGivenDifference(arr, k) {
  /*
    let res = [];
    for(let i = 0; i < arr.length; i++){
      let num = k + arr[i];
      if(arr.indexOf(num) !== -1){
        res.push([num, arr[i]]);
      }
    }
   return res;
   */
    let res = [];
    let counter = {};
    for(let i = 0; i < arr.length; i++){     
      counter[arr[i] - k] = arr[i];
    }
    for(let y of arr){
      if(y in counter){
        res.push([counter[y], y]);
      }
    }
  
    console.log(res);
    return res;
}
