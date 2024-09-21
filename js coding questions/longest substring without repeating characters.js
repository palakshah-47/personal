function findLongestSubString(s) {
  var max = 0;
  var set = new Set();
  var left = 0;
  for (var right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(findLongestSubString('abcabcbb')); // Output: 3

