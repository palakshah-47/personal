// var subarraySum = function(nums, k) {
//    let count = 0;
//    for(let i = 0 ; i < nums.length; i++){
//        let sum = 0;
//        for(let j = i; j < nums.length; j++){
//            sum += nums[j];
//            if(sum === k) count++;
//        }
//    }
//   return count;
// };

// console.log(subarraySum([1,1,1], 2));

var findMiddleIndex = function(nums) {
    if(!nums.length) return -1;
    let sum = 0;
    let left = 0;
    let right = 0;
    
    right = nums.reduce((a,b) => a+b, 0);
    
    for(let i = 0 ; i < nums.length ; i++){
        if(left * 2 === right - nums[i]) return i;
        left += nums[i];       
    }
    return -1;
};

 console.log(findMiddleIndex([2,3,-1,8,4]));

// var canThreePartsEqualSum = function(arr) {
//     if(!arr.length) return false;
//     let leftSum = 0;
//     let count = 0;
//     let rightSum = arr.reduce((a,b) => a+b, 0);
//     if(rightSum % 3 !== 0) return false;
//     // rightSum /= 3;
   
//     for(let i = 0 ; i < arr.length; i++){ 
//         leftSum += arr[i];
//         if(leftSum === rightSum/3 && count <= 2) {
//             count++;
//             leftSum = 0;
//         }        
//     }
//      // if(count === 0) return false;
//      // if(leftSum === 0 && rightSum === 0) return true;
//      // if(count !== 0 && leftSum === rightSum && leftSum === 0) return false;
//      return (count == 3 && leftSum === 0);
    
// };

// console.log(canThreePartsEqualSum([0,0,0,0]));