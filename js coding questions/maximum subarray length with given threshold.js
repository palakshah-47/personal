/*
There is an array of integers and threshold value. Find max subarray allowing threshold value.
[1,1,1,2,2,3,3,4,4,4]; and threshold = 2, the output should 8 for subarray [1,1,2,2,3,3,4,4]
array: [1,2,3,1,4,5,5,6] and threshold = 1, the output should 5 for subarray [2,3,1,4,5]
*/
function maxSubArrayLength(array, threshold) {
  let maxLength = 0;
  let start = 0;
  const freqmap = new Map();

  for (let end = 0; end < array.length; end++) {
    freqmap.set(array[end], (freqmap.get(array[end]) || 0) + 1);

    while (freqmap.get(array[end]) > threshold) {
      freqmap.set(array[start], freqmap.get(array[start]) - 1);
      if (freqmap.get(array[start]) == 0) freqmap.delete(array[start]);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(maxSubArrayLength([1, 2, 3, 1, 4, 5, 5, 6], 1)); // Output: 8
