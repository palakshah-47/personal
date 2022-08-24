/*
* The cost of stock on each day is given in an array A[] of size N. Find all the days on which you buy and sell the stock so that in between those days your profit is maximum.
Input:
N = 7
A[] = {100,180,260,310,40,535,695}
Output:
1
Explanation:
One possible solution is (0 3) (4 6)
We can buy stock on day 0,
and sell it on 3rd day, which will 
give us maximum profit. Now, we buy 
stock on day 4 and sell it on day 6.
*/

function stockBuySell(A) {
    let start = 0, max = 0;
    for (let end = 0; end < A.length; end++){
        let profit = A[end] - A[start];
        if (profit > max) max = profit;
        else {
            start = end;
        }
    }
    return max !== 0 ? 1 : 0;
};

console.log(stockBuySell([100,180,260,310,40,535,695]));