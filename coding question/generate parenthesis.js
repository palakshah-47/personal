function isPalindrome(str){
  if(str.length === 0) return false;
  if(str.length === 1) return true;
  let originalStr = str;
  str = str.split("").reverse().join(""); 
  if(originalStr === str) {
      return true;
  }
  return false;
}


console.log(isPalindrome('tacocat'));

// function nestedEvenSum (parentObj, total = 0) {
//   for(let val of Object.values(parentObj)){
//       if(val instanceof Object){
//         total = total + nestedEvenSum(val);
//       } 
//       if (typeof val === 'number' && val % 2 ===0) {
//           total = total + val;
//       }            
//   }
//    return total;
// }


// let objA = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// let objB = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// const total = 0;
// console.log(nestedEvenSum(objB)); // 6
// // nestedEvenSum(obj2); // 10


// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
 
// }

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));

// function linearSearch(array, val){
//       return array.indexOf(val);
// }

// console.log(linearSearch([100], 100));

// function binarySearch(arr, num){
//   if(arr.length === 0) return -1;
//   let left = 0;
//   let right = arr.length;
//   while(left < right){
//      let middle = (right + left) % 2 === 0 ? (right + left) / 2 : (right-1 + left) / 2 ;
//       if(arr[middle] === num) return middle;
//       if(arr[middle] < num) {
//          left++; 
//       }else {
//           right--;
//       }  
//   }
//   return -1;
  
// }
// console.log(binarySearch([1,2,3,4,5], 2));


// function binarySearch(arr, num){
//   if(arr.length === 0) return -1;
//   let left = 0;
//   let right = arr.length -1;
//   let middle = Math.floor((left + right) /2);
//   while(arr[middle] !== num && left <= right){
//       if(num < arr[middle]) right = middle - 1;
//       else left = middle + 1;
//       middle = Math.floor((left + right) /2);
//   }
//   return (arr[middle] === num) ? middle : -1;
  
// }
// console.log(binarySearch([5,6,10,13,14,18,30,34,37,40,44,64,79,84,86,95,96,98,99], 10));


// var generateParenthesis = function(n) {
    
//     let arr = []; 
    
//         function helper(str, open, close) {
//             if(open > close) return;
//             if(!open && !close) {
//                 arr.push(str);
//                 return;
//             }
            
//             if(open > 0) {
//                 helper(str +'(', open - 1, close);
//             }
//             if(close > 0) {
//                 helper(str +')', open, close-1);
//             }
//         }
    
//     helper('', 3, 3);
//     return arr;
// };

// console.log(generateParenthesis(3));