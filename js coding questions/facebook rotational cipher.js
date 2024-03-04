/*
Rotational Cipher
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.

For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.

Signature
string rotationalCipher(string input, int rotationFactor)

Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000

Output
Return the result of rotating input a number of times equal to rotationFactor.

Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?

Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/

/*
Solution:
Time: O(n) where n = input length
Space: O(n)

character isn't letter or digit --> don't need to do any work
character is letter --> mod 26 because size of alphabet and ensure wrap around ascii number after 'Z' or 'z'
character is a digit --> mod 10 because number of single digits and ensure wrap around ascii number after '9'
*/

const rotationalCipher = (input, rotationFactor) => {
  let result = '';
  let upperCaseStart = 'A'.charCodeAt(0);
  let lowerCaseStart = 'a'.charCodeAt(0);

  let regex = new RegExp('[a-zA-Z]');

  for (let ch of input) {
    if (!isNaN(parseInt(ch))) {
      result += `${(parseInt(ch) + rotationFactor) % 10}`;
    } else if (regex.test(ch)) {
      let isUpperCase = ch === ch.toUpperCase();
      //   let code = isUpperCase
      //     ? ch.charCodeAt(0) - upperCaseStart
      //     : ch.charCodeAt(0) - lowerCaseStart;
      let codeToAlpha = (ch.charCodeAt(0) + rotationFactor) % 26;
      codeToAlpha = isUpperCase
        ? String.fromCharCode(codeToAlpha + upperCaseStart)
        : String.fromCharCode(codeToAlpha + lowerCaseStart);
      result += codeToAlpha;
    } else {
      result += ch;
    }
  }
  return result;
};

console.log(rotationalCipher('Zebra-493?', 3));
