/*
*Given a set of N intervals denoted by 2D array A of size N x 2, the task is to find the length of maximal set of mutually disjoint intervals.

Two intervals [x, y] & [p, q] are said to be disjoint if they do not have any point in common.

Return a integer denoting the length of maximal set of mutually disjoint intervals.
Input 1:

 A = [
       [1, 4]
       [2, 3]
       [4, 6]
       [8, 9]
     ]
     output : 3

     Explanation 1:

 Intervals: [ [1, 4], [2, 3], [4, 6], [8, 9] ]
 Intervals [2, 3] and [1, 4] overlap.
 We must include [2, 3] because if [1, 4] is included thenwe cannot include [4, 6].
 We can include at max three disjoint intervals: [[2, 3], [4, 6], [8, 9]]
*/
  function solve(A){
        // let start = A[0];
        A.sort((a,b)=> a[1]-b[1]);
        let n = A.length;
      let count = 1;
      let lastIntervalSelected = 0;
        for(let i = 1; i < n; i++){                    
            if (A[lastIntervalSelected][1] < A[i][0]) {
                count++;
                lastIntervalSelected = i;
            }
        }
        return count;
	}
    
console.log(solve([[1, 4], [2, 3], [4, 6], [8, 9]]));