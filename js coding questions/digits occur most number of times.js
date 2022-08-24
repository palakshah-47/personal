/*Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.
Example
For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].
*
*/

function findMaxOccurance(a) {
    let digits = new Array(10).fill(0);
    for (let i = 0; i < a.length; i++){
        let numArr = a[i].toString().split("");
        for (let j = 0; j < numArr.length; j++){
            digits[Number(numArr[j])]++;
        }
    }

    let max = Math.max(...digits);
    let res = [];
    for (let i = 0; i < digits.length; i++){
        if (digits[i] === max) res.push(i);
    }
    return res;
}

console.log(findMaxOccurance([25, 2, 3, 57, 38, 41]));