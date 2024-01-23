/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs.length) return [['']];
  if (strs.length === 1) return [[strs[0]]];

  let res = [];
  let anagrams = {};

  // for(let word of strs){
  //     let letters = word.split("").sort().join("");
  //     anagrams[letters] = anagrams[letters] || [];
  //     anagrams[letters].push(word);
  // }

  // Object.values(anagrams).forEach((value) => {
  //     res.push(value);
  // });

  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split('').sort().join('');
    if (map.has(word)) {
      map.get(word).push(strs[i]);
    } else {
      map.set(word, [strs[i]]);
    }
  }
  return [...map.values()];
  // return res;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
