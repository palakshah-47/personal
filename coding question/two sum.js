function twoSum(numbers, target) {
  // let left = 0;
  // let right = numbers.length -1;
  // let sum = numbers[left] + numbers[right];
  // if(sum === target) return [left+1, right+1];
  // while(sum != target){
  //     sum < target ? left++ : right--;
  //     sum = numbers[left] + numbers[right];
  // }
  // return [left+1, right+1];
  let result = {};
  for (let i = 0; i < numbers.length; i++) {
    let num = target - numbers[i];
    if (num in result) {
      return [result[num] + 1, i + 1];
    }
    result[numbers[i]] = i;
  }
  return [];
}

function twoSumSortedArr(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let start = i + 1;
    let end = numbers.length - 1;

    while (start <= end) {
      let middle = Math.floor(start + (end - start) / 2);
      if (numbers[middle] > target - numbers[i]) {
        end = middle - 1;
      } else if (numbers[middle] < target - numbers[i]) {
        start = middle + 1;
      } else {
        return [i + 1, middle + 1];
      }
    }
  }
}

console.log(
  twoSum(
    [
      4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3,
      -3, -5, 4, -7, 7, 9, -4, 4, -8,
    ],
    -3
  )
);
// console.log(twoSumSortedArr([2, 3, 4], 6));
