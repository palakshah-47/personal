/*
You are given two strings s and t. You can select any substring of string s and rearrange the 
characters of the selected substring. Determine the minimum length of the substring of s such that 
string t is a substring of the selected substring.
Signature
int minLengthSubstring(String s, String t)
Input
s and t are non-empty strings that contain less than 1,000,000 characters each
Output
Return the minimum length of the substring of s. If it is not possible, return -1
Example
s = "dcbefebce"
t = "fd"
output = 5
Explanation:
Substring "dcbef" can be rearranged to "cfdeb", "cefdb", and so on. 
String t is a substring of "cfdeb". Thus, the minimum length required is 5.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (t.length > s.length) return '';
  if (s.length === t.length && s.length === 1 && s[0] === t[0]) return s[0];

  let tMap = {};
  let needed = 0;
  let minLen = Number.MAX_VALUE;
  let minSubStr = '';
  for (let ch of t) {
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

  for (let right = 0; right < s.length; right++) {
    if (s[right] in windowCnt) windowCnt[s[right]]++;
    else windowCnt[s[right]] = 1;

    if (s[right] in tMap && tMap[s[right]] === windowCnt[s[right]]) matched++;

    while (needed === matched) {
      let len = right - left + 1;
      if (len < minLen) {
        minLen = len;
        minSubStr = s.slice(left, right + 1);
      }
      if (s[left] in tMap && tMap[s[left]] === windowCnt[s[left]]) matched--;
      windowCnt[s[left]]--;
      if (windowCnt[s[left]] === 0) delete windowCnt[s[left]];
      left++;
    }
  }
  return minSubStr;
}

console.log(minWindow('dcbefebce', 'fd'));
