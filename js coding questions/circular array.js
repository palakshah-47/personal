/*
* John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

Example
a = [3,4,5]
k = 2
queries = [1,2]
[3,4,5] -> [5,3,4] -> [4,5,3]
answer is a[1] = 5, a[2] = 3
Here  is the number of rotations on , and  holds the list of indices to report. First we perform the two rotations: 

Now return the values from the zero-based indices  and  as indicated in the  array.

Complete the circularArrayRotation function

*/

const circularArrayRotation = (a, k, queries) => {

    // for(let i = 0; i < k; i++){
    //     a.unshift(a.pop());
    // }

    // return queries.map(i => a[i]);
    return queries.map(item=>a[(a.length + item - k) % a.length]);

}

console.log(circularArrayRotation([3,4,5], 2, [1,2]));