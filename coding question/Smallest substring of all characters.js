/*
* Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
*/

function minWindow(arr, t) {
  if (arr.length > t.length) return '';
  if (arr.length === t.length && arr.length === 1 && arr[0] === t[0])
    return arr[0];

  let tMap = {};
  let needed = 0;
  let minLen = Number.MAX_VALUE;
  let minSubStr = '';
  for (let ch of arr) {
    if (tMap[ch] !== undefined) {
      tMap[ch] += 1;
    } else {
      tMap[ch] = 1;
      needed++;
    }
  }

  let windowCnt = {};
  let matched = 0;

  let left = 0;

  for (let right = 0; right < t.length; right++) {
    if (t[right] in windowCnt) windowCnt[t[right]]++;
    else windowCnt[t[right]] = 1;

    if (t[right] in tMap && tMap[t[right]] === windowCnt[t[right]]) matched++;

    while (needed === matched) {
      let len = right - left + 1;
      if (len < minLen) {
        minLen = len;
        minSubStr = t.slice(left, right + 1);
      }
      if (t[left] in tMap && tMap[t[left]] === windowCnt[t[left]]) matched--;
      windowCnt[t[left]]--;
      if (windowCnt[t[left]] === 0) delete windowCnt[t[left]];
      left++;
    }
  }
  return minSubStr;
}
console.log(minWindow(['x', 'y', 'z'], 'xyyzyzyx'));

/*
xyyz  yzyx
*/
