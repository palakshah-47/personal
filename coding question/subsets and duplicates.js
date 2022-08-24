

// function getSubarr(array){
//   const result = [[]] // Starting with empty set
  
//   for (let value of array) { // For each value of the array
//      const length = result.length // Can't use result.length in loop since 
//                                   // results length is increased in loop
//       for (let i = 0; i < length; i++){        
//         let temp = result[i].slice(0) // Make a clone of the value at index i  
//         temp.push(value) // Add current value to clone
//         result.push(temp) // Add clone back to results array
//         console.log('now result: '+ result);
//       }
    
//   }
  
 
//   return result;
// }

function getSubSet(array){
  const result = [[]] 
  for(let el of array ){
     let length = result.length-1;
      for(var i = 0; i <= length; i++){
        result.push([...result[i], el]);
      }
  }
  return result;
}

function getSet(array, prefix = [], set=[[]]){
  if(array.length === 0) return;

  for(var i = 0; i < array.length; i++){
    set.push(prefix.concat(array[i]));
    getSet(array.slice(i+1), prefix.concat(array[i]), set);
  }
  return set;
}

function sumSet(set){
 let sum = 0;
 for(let i=0 ; i < set.length; i++){
   let arr = set[i];
   sum += arr.reduce((acc, el) => acc + el, 0);
   // arr.forEach(el => sum += el);
 }
 return sum;
}

// console.log(getSubarr([1,2,3]));
 console.log(getSubSet([1,2,3]));
 console.log(sumSet(getSet([1,2,3])));

// function areThereDuplicates() {
//   let result = {};
//   for(var i =0 ; i < arguments.length; i++){
//       if(arguments[i] in result){
//           result[arguments[i]] = result[arguments[i]] + 1;
//       }else {
//           result[arguments[i]] = 1;
//       }
//   }
//   return Object.values(result).indexOf(2) > -1 ? false : true;
// }

// console.log(areThereDuplicates(1,2,4,2,3,5,6));