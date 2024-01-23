/**
* Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

function rotateRight(nums, k) {
  if (!nums.length) return nums;
  k = k % nums.length;
  // if(k === 0) return nums;

  // nums.reverse();
  // reverse(nums, 0, k-1);
  // reverse(nums, k, nums.length-1);
  // return nums;

  // function reverse(nums, low, high) {
  //    while(low<high){
  //        [nums[low], nums[high]] = [nums[high], nums[low]];
  //        low++;
  //        high--;
  //    }
  // }
  //   while (nums.length <= k) {
  //     k = k - nums.length;
  //   }
  const temp = nums.splice(0, nums.length - k);
  nums.push(...temp);
  return nums;
}

// function rotateLeft(a, d) {

//     // for(let i = 0; i < k; i++){
//     //     nums.push(nums.shift());
//     // }

//     // return nums;

//    if(!a.length) return [];
//    for(let i = 0; i < d; i++){
//        let first = a[0];
//        let j;
//        for(j = 0; j < a.length-1; j++){
//            a[j] = a[j+1];
//        }
//       a[j] = first;
//    }
//    return a;
// }

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3));
