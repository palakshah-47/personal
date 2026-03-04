function findLongestSubString(s) {
  var max = 0;
  var set = new Set();
  var left = 0;
  let result = '';
  for (var right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    let length = right - left + 1;
    if(length > max) {
      result = s.slice(left, right + 1);
      max = length;
    }
    
  }
  return result;
}

console.log(findLongestSubString('abcabcbb')); // Output: 3

