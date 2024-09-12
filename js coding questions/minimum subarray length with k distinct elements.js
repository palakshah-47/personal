const minSubArrayLength = (arr, k) => {
  let left = 0,
    minLength = Number.MAX_VALUE;
  let map = new Map();

  for (let right = 0; right < arr.length; right++) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);

    while (map.size > k) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) map.delete(arr[left]);
      left++;
    }
    if (map.size === k) {
      minLength = Math.min(minLength, right - left);
    }
  }
  return minLength === Number.MAX_VALUE ? 0 : minLength;
};

console.log(minSubArrayLength([1, 1, 2, 2, 3, 3, 4, 5], 3));
