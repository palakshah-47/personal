/*
*
Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example :

Input : [2, 1, 2]
Return  : 2 which occurs 2 times which is greater than 3/2.
*/
majorityElement = function (A) {
       if(!A.length) return 0;
       if(A.length === 1) return A[0];
       let num = Math.floor(A.length/2);
       let counter = {};
       for(let i = 0; i < A.length; i++){           
               counter[A[i]] = counter[A[i]] + 1 || 1;          
       }
       Object.entries(counter).forEach(([key,value]) => {
           if(value > num) return key;
       })
}
    
console.log(majorityElement([100]));