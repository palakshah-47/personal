/*
* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permute(nums) {
  let res = [];
  function dfs(curr, rest) {
    if (rest.length === 0) {
      res.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }

  dfs([], nums);
  return res;
}

console.log(permute([1, 2, 3]));
/*
* Print all distinct permutations of a given string with duplicates
Given a string that may contain duplicates, write a function to print all permutations of given string such that no permutation is repeated in output.
Examples: 

Input:  str[] = "AB"
Output: AB BA

Input:  str[] = "AA"
Output: AA

Input:  str[] = "ABC"
Output: ABC ACB BAC BCA CBA CAB

Input:  str[] = "ABA"
Output: ABA AAB BAA
*/

function distinctPermutation(s) {
  let res = [];

  function dfs(cur, str) {
    if (str.length < 1) {
      res.push(cur);
      return;
    }

    let set = new Set();
    for (let i = 0; i < str.length; i++) {
      if (set.has(str[i]) === true) {
        continue;
      } else {
        set.add(str[i]);
      }

      let temp = '';
      if (i < str.length - 1) {
        temp = str.substring(0, i) + str.substring(i + 1);
      } else {
        temp = str.substring(0, i);
      }
      dfs(cur + str[i], temp);
    }
  }

  s = s.split('').sort().join('');
  dfs('', s);
  return res;

  // function printAllPermutationsFast(s, l){
  //     if (s.length < 1) {
  //         res.push(l);
  //         return;
  //     }
  //     let uset = new Set();
  //     for (let i = 0; i < s.length; i++) {
  //         if (uset.has(s[i]) == true) {
  //             continue;
  //         }
  //         else {
  //             uset.add(s[i]);
  //         }
  //         let temp = "";
  //         if (i < s.length - 1) {
  //             temp = s.substring(0, i) + s.substring(i + 1);
  //         }
  //         else {
  //             temp = s.substring(0, i);
  //         }
  //         printAllPermutationsFast(temp, l + s[i]);
  //     }
  // }

  // s = s.split("").sort().join("");
  // printAllPermutationsFast(s, "");
  // return res;
}

// console.log(permute([1, 2, 3]));
// console.log(distinctPermutation('ACBC'));
