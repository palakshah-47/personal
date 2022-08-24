// function maxSubarraySum(array, numlength){
//  let maxSum = Number.MIN_VALUE;

//  let maxGlobal = Number.MIN_VALUE;
 
//  for( let i = 1; i < array.length; i++){  
//      let maxCurrent = 0;
//      for(let j = 1 ; j < numlength; j++){         
//          maxCurrent = maxCurrent + array[i-1] + + array[i];         
//      }
//      if(maxCurrent > maxGlobal){
//          maxGlobal = maxCurrent;            
//      }   
 
//  }
//      return maxGlobal;  

// }


function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

 console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));

// function minSubArrayLen(array, sumVal){
//     if(array.length === 0) return 0;
//     let lenCount = Number.MAX_VALUE;
//     let sum = 0;
//     let = left = 0;
//     for(let i = 0 ; i < array.length; i++){    
//         sum = sum + array[i];  
//          while(sum >= sumVal) {
//           lenCount = Math.min(lenCount, i+1 - left);
//           sum = sum - array[left];
//           left++;
//         }
//     }
   
//     return (lenCount != Number.MAX_VALUE) ? lenCount : 0;
// }


// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));

// var maxSubArray = function(nums) {
//     let maxGlobal = Number.MIN_VALUE;
//     let maxSum = 0;     
//     for( var i = 0 ; i < nums.length; i++){        
//         maxSum += nums[i];
//         if(maxSum < nums[i]){
//             maxSum = nums[i];
//         }
                  
//        maxGlobal = Math.max(maxGlobal, maxSum);
//     }
//     return maxGlobal;
    
// };

// console.log(maxSubArray([ -2, -3, 4, -1, -2, 1, 5, -3 ]));

function maxsubArrayWithSum(arr, target){
        let maxSum = Number.MIN_VALUE;       
        let result = [];
        let j = 0;
        for(let i = 0; i < arr.length; i++){
            maxSum += arr[i];
            while(maxSum >= target && j < arr.length){
                if(maxSum === target){
                    return [j+1, i+1];
                }
                maxSum = maxSum - arr[j];
                j++;
                
                
            }
        }
       return [-1];
}

// function findLongestSubstring(str){
//   if(!Object.keys(str).length) return 0;
//   if(str.length == 1) return 1;
//   let set = new Set();
//   let left = 0;
//   let right = 0;
//   let longest=Number.MIN_VALUE;
//   while(right < str.length){
//       if(!set.has(str[right])){
//           set.add(str[right]);
//           longest = Math.max(longest, set.size);
//           right++;
//       } else {
//           set.delete(str[left]);
//           left++;
//       }
//   }
//   return longest;
// }

// console.log(findLongestSubstring('thisisawesome'));
 console.log(maxsubArrayWithSum([1, 2, 3, 7, 5], 12));