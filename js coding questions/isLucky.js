/*
* 
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.
Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
*/
function solution(n) {
  let numString = n.toString().split('');
  let partition = Math.ceil(numString.length / 2);
  let numStr1 = numString.slice(0, partition);
  let numStr2 = numString.slice(partition);
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < numStr1.length; i++) {
    sum1 += numStr1[i] === 0 ? 0 : parseInt(numStr1[i]);
  }
  for (let i = 0; i < numStr2.length; i++) {
    sum2 += numStr2[i] === 0 ? 0 : parseInt(numStr2[i]);
  }

  return sum1 === sum2;
}

console.log(solution(239017));
