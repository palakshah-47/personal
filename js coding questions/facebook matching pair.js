/*
* Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
Note: This means you must swap two characters at different indices.
Signature
int matchingPairs(String s, String t)
Input
s and t are strings of length N
N is between 2 and 1,000,000
Output
Return an integer denoting the maximum number of matching pairs
Example 1
s = "abcd"
t = "adcb"
output = 4
Using 0-based indexing, and with i = 1 and j = 3, s[1] and s[3] can be swapped, making it  "adcb".
Therefore, the number of matching pairs of s and t will be 4.
*/

const matchingPair = (s, t) => {
  // Map to track t to s mapping
  const map = new Map();
  let count = 0;
  let maxMatch = 0;
  for (let i = 0; i < s.length; i++) {
    // Count only valid matches then continue
    if (s[i] === t[i]) {
      count++;
      continue;
    }
    // If no valid match, then check if we already found best swappable characters
    // If yes, then continue
    if (maxMatch == 2) continue;

    // Add t-to-s map
    const tempSet = map.get(t[i]) || new Set();
    tempSet.add(s[i]);
    map.set(t[i], tempSet);

    // in the same turn check if current s[i] is in map's set
    const item = map.get(s[i]);
    // Check if swap is a single match
    if (item) {
      // If yes, then at least one match exists (s[i] could be swapped with previouslyFound-ithChar in s) example a->b  b->p
      maxMatch = 1;
      // Check if swap is a double match
      // if the it's corresponding t also matches the compliment - Example a->b    b->a
      if (item.has(t[i])) maxMatch = 2;
    }
  }
  // If no match was found, reduce 2 since we have swap even if all characters are already matching.
  if (!maxMatch) return count - 2;
  // Else return normal matches and swap matches
  return count + maxMatch;
};

console.log(matchingPair('abcde', 'adcbe'));
