/*
* Given a rows x cols binary matrix filled with 0's and 1's, 
find the largest rectangle containing only 1's and return its area. 

Example 1:
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
*/

function maximalRectablge(matrix) {
       if (matrix.length <= 0) return 0;
        const n = matrix.length;
        const m = matrix[0].length;
        const histogram = new Array(m).fill(0);
        // const dp = new Array(n).fill([]).map(() => new Array(m).fill(0))
        let maxArea = 0;
        function findMax(histogram) {
            if (!histogram.length) return 0;
            if (histogram.length === 1) return histogram[0];
            let stack = [];
            let newArr = [...histogram];
            newArr.push(-1);
            for (let i = 0; i < newArr.length; i++){
                let j = stack.length - 1;
                while(j >= 0 && newArr[stack[j]] > newArr[i]){
                    let h = stack.pop();
                    j--;
                    let otherIdx = j >= 0 ? stack[j] : -1;
                    maxArea = Math.max((i - otherIdx - 1) * newArr[h], maxArea);
                }
                stack.push(i);
            }
            return maxArea;
        }
        // for (let r = 0; r < n; r++) {
        //     for (let c = 0; c < m; c++) {
        //         if (matrix[r][c] == 0) continue;
        //         dp[r][c] = dp[r - 1] ? dp[r - 1][c] + 1 : 1;
        //         let min = dp[r][c];
        //         for (let k = c; k >= 0; k--) {
        //             if (dp[r][k] == 0) break;
        //             min = dp[r][k] < min ? dp[r][k] : min;
        //             maxArea = Math.max(maxArea, min * (c - k + 1))
        //         }
        //     }
        // }
        // return maxArea;
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++){
            if (matrix[row][col] === '1') histogram[col]++;
            else histogram[col] = 0;
        }
        maxArea = Math.max(maxArea, findMax(histogram));
        // for (let c = 0; c < m; c++){
        //     let left = c - 1, right = c + 1;
        //     while (left >= 0 && histogram[left] >= histogram[c]) left--;
        //     while (right < m && histogram[right] >= histogram[c]) right++;
        //     maxArea = Math.max(histogram[c] * (right - left - 1), maxArea);
        // }
    }
    return maxArea;
    //console.log()

}

console.log(maximalRectablge([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));