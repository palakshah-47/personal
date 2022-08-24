const removeDuplicates = (nums) => {
  let j = 0;
  let i = 0;

  for (; j < nums.length; j++){
    if (nums[j] !== nums[j + 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

// const removeDuplicates = (nums) => {
//   let i = 0;
//   for(let j = 0; j < nums.length; j++){
//     if(nums[j] !== nums[i]){
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i+1;
// }

console.log(removeDuplicates( [0,0,1,1,1,1,2,3,3]));