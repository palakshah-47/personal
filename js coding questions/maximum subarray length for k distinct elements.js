const maxSubArrayLength = (arr, k) => {
  let left = 0,
    leftIndex = 0,
    rightIndex = 0,
    maxLength = Number.MIN_VALUE;
  let map = new Map();

  for (let right = 0; right < arr.length; right++) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);

    while (map.size > k) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) map.delete(arr[left]);
      left++;
    }
    if (map.size === k) {
      maxLength = Math.max(maxLength, right - left + 1);
      if (rightIndex - leftIndex < right - left) {
        leftIndex = left;
        rightIndex = right;
        console.log(leftIndex, rightIndex);
      }
    }
  }

  return maxLength === Number.MIN_VALUE ? 0 : maxLength;
};

console.log(maxSubArrayLength([1, 1, 2, 2, 3, 3, 4, 5], 3));
