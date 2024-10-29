/*
* Search an element in sorted and rotated
  array using single pass of Binary Search 
  Returns index of key in arr[l..h] if
  key is present, otherwise returns -1
  Input: [4, 5, 7, 9, 10, -1, 2], key = 10
  Output: 4
  Explanation: '10' is present in the array at index '4'.
*/

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[low] <= arr[mid]) {
      if (key >= arr[low] && key < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (key > arr[mid] && key <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch([4, 5, 7, 9, 10, -1, 2], 10));
