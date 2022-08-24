/**
 * let's say we have a 2-dimensional array. just like as shown below.

a  b  c  0  0  0

0  d  0  0  0  0

e  f   g  0  0  0

0  0  0  0  0  0

0  0  0  0  0  0

0  0  0  0  0  0

so here the one hourglass of an array is that follows the pattern. just like this...

a b c

  d  

e f g
 */

 function hourglassSum(arr) {
    let sum = Number.MIN_VALUE;
    for(let row = 0; row < 4; row++){
        for(let col = 0; col < 4; col++){
            sum = Math.max(arr[row][col]+arr[row][col+1]+arr[row][col+2]+arr[row+1][col+1]+arr[row+2][col]+arr[row+2][col+1]+arr[row+2][col+2], sum);
            
        }
    }
  return sum;
}

console.log(hourglassSum([]))