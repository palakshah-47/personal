/*
* Given two strings s and t of lengths m and n respectively, return the minimum window substring of 
s such that every character in t (including duplicates) is included in the window.
 If there is no such substring, return the empty string "".
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
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

console.log(minWindow('ADOBECODEBANC', 'ABC'));
// console.log(minWindow('ADOBECODEBANCDDD', ['A', 'B', 'C'].join('')));
