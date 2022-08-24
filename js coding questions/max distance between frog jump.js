/**
 * 
 * There are N block from 0 to N-1. 
 * A couple of frogs were sitting together on one block, 
 * They had a quarrel and need to jump away from one another. 
 * The frogs can only jump to another block if the height of the other block is greater than equal to the current one. 
 * You need to find the longest possible distance that they can possible create between each other, 
 * if they also choose to sit on an optimal starting block initially.
 */
function frogJump(arr) {
    let maxJump = 0;
    if (!arr.length || arr.length <= 1) return maxJump;
    let n = arr.length;
    let leftArr = new Array(n);
    let rightArr = new Array(n);

    leftArr[0] = 0;
    for (let i = 1; i < n; i++){
        if (arr[i] <= arr[i - 1]) {
            leftArr[i] = leftArr[i - 1] + 1;
        } else {
            leftArr[i] = 0;
        }
    }

    rightArr[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--){
        if (arr[i] <= arr[i + 1]) {
            rightArr[i] = rightArr[i + 1] + 1;
        } else {
            rightArr[i] = 0;
        }
    }

    for (let i = 0; i < n; i++){
        maxJump = Math.max(maxJump, leftArr[i] + rightArr[i] + 1);
    }
    return maxJump;
}
console.log(frogJump([1, 5, 5, 2, 6, 5, 7]));