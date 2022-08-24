/*
* Find all missing numbers from a given sorted array
Given a sroted array arr[] of N integers, the task to find multiple missing elements in the array
between the ranges [arr[0], arr[N-1]]
example
arr[] = {6,7,10,11, 13}
output = 8, 9, 12

approach 1: Iterate over the differences between consecutive pairs of elements and print all numbers
time complexity: O(N2), space : O(1)
*/
function findMissing(arr, N) {
    let res = [];
    if (!arr.length) return 0;
    if (N === 1 && arr[0] === 0) return 0;
    let diff = arr[0] - 0;
    for (let i = 0; i < N; i++){
        //check if diff and arr[i]-i both are eaqual or not
        if (arr[i] - i !== diff) {
            //loop for consecutive missing nos
            while (diff < arr[i] - i) {
                res.push(i + diff);
                diff++;
            }
        }
    }
    return res.length;
}

//approach 2: memoization - Initialize the boolean array with zero of size equals to maximum element of the array
//time complexity: O(M) where M is the maximum element of the array, space: O(M)
function findMissing2(arr, N) {
    let res = [];
    let arrb = new Array(arr[N - 1] + 1).fill(0);
    for (let i = 0; i < N; i++){
        arrb[arr[i]] = 1;
    }
    for (let i = arr[0]; i <= arr[N-1]; i++){
        if (arrb[i] === 0) res.push(i);
    }
    return res.length;
}

// console.log(findMissing([6, 7, 10, 11, 13], 5));
// console.log(findMissing2([6, 7, 10, 11, 13], 5));

//approach 3: create a variable that keeps track of element present in array
//time complexity: O(N) where N is the maximum element of the array, space: O(1)
function findMissing3(arr, N) {
    let res = [];
    let count = 0;
    for (let i = arr[0]; i <= arr[N - 1]; i++){
        if (arr[count] === i) count++;
        else {
            res.push(i);
        }
    }
    return res.length;
}

console.log(findMissing3([6, 7, 10, 11, 13], 5));
