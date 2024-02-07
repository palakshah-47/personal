/*
* Make Two Arrays Equal by Reversing Subarrays
Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
Signature
bool areTheyEqual(int[] arr_a, int[] arr_b)
Input
All integers in array are in the range [0, 1,000,000,000].
Output
Return true if B can be made equal to A, return false otherwise.
Example
A = [1, 2, 3, 4]
B = [1, 4, 3, 2]
output = true
After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/

const findEqualArr = (arr1, arr2) => {
  const map = new Map();
  arr1.forEach((el) => map.set(el, (map.get(el) || 0) + 1));

  for (let i = 0; i < arr2.length; i++) {
    if (!map.has(arr2[i])) {
      return false;
    }
    map.set(arr2[i], map.get(arr2[i]) - 1);
    if (!map.get(arr2[i])) {
      map.delete(arr2[i]);
    }
  }
  return map.size === 0;
};

console.log(findEqualArr([1, 2, 3, 4], [1, 4, 3, 2]));
