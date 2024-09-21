/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".
*/

function solution(st) {
  if (isPalindrome(st)) return st;
  for (let i = 0; i < st.length; i++) {
    if (isPalindrome(st.slice(i, st.length))) {
      return st + st.slice(0, i).split('').reverse().join('');
    }
  }
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(solution('abcdc')); // "abcdcba"
