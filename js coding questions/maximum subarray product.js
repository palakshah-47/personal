function maxProduct(arr, n) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];
  let preMax = 1;
  let preMin = 1;
  let maxProduct = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      (preMax = 1), (preMin = 1);
      continue;
    }
    let curMax = Math.max(preMin * arr[i], preMax * arr[i], arr[i]);
    let curMin = Math.min(preMin * arr[i], preMax * arr[i], arr[i]);

    preMax = curMax;
    preMin = curMin;

    maxProduct = Math.max(maxProduct, curMax);
  }
  return maxProduct;
}

console.log(maxProduct([6, -3, -10, 0, 2], 5));
