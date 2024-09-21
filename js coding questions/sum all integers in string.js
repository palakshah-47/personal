/*
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
solution(inputString) = 14.
*/

function solution(inputString) {
  if (inputString.length === 0) return 0;
  if (inputString.length === 1 && !isNaN(inputString[0]))
    return Number(inputString[0]);
  const integers = [];
  let currentNumber = '';

  for (let i = 0; i < inputString.length; i++) {
    let ch = inputString[i];
    if (ch !== ' ' && !isNaN(Number(ch)) && Number(ch) >= 0 && Number(ch) <= 9)
      currentNumber += ch;
    else if (currentNumber) {
      console.log(currentNumber);
      integers.push(Number(currentNumber));
      currentNumber = '';
    }
  }
  if (currentNumber) {
    integers.push(Number(currentNumber));
  }
  return integers.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution('12 51 0 0 1 0 10')); // 74
