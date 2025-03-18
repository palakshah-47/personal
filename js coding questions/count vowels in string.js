/*Write a function that counts the number of vowels in a given string. 
Remember, the vowels are 'a', 'e', 'i', 'o', and 'u'. 
The function should be case-insensitive and count both uppercase and lowercase vowels.*/

function countVowels(str) {
  let count = 0;
  const obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    let ch = str[i].toLowerCase();
    if (ch in obj) {
      count++;
    }
  }
  //   for (const value of Object.values(obj)) {
  //     count += value; // Add the count of each vowel to the total count
  //   }

  return count;
}

console.log(countVowels('Hello World!'));
