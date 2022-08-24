/*
* check if the array is strictly sorted after swapping the digits if its one element at each move
example
input: [1, 3, 900, 10],
output: true, as swapping first and third digits in 900, will become 009, which is smaller than 10
*/

function solution(numbers) {
    let flawedIndex = 0, flawedFlag = false;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > numbers[i + 1]) {
            if (flawedFlag) return false;
            else {
                flawedFlag = true;
                flawedIndex = i;
            }
        }
    }
    if (!flawedFlag) return true;
    if (flawedFlag) {
        let swapResult = swap(flawedIndex, numbers);
        return swapResult;
    }

}

function swap(flawedIndex, numbers) {
    let isSwapPossible = false;
    let num = numbers[flawedIndex];
    let numString = num.toString().split("");
    for (let i = 0; i < numString.length; i++){
        for (let j = i + 1; j < numString.length; j++){
            let temp = numString[i];
            numString[i] = numString[j];
            numString[j] = temp;
            let swappedNum = Number(numString.join(""));
            if (swappedNum < numbers[flawedIndex + 1] && swappedNum > numbers[flawedIndex - 1]) isSwapPossible = true;           
        }
    }
    return isSwapPossible;
}

console.log(solution([1, 3, 900, 10]));