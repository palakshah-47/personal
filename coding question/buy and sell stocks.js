/*
* You want to maximize your profit by choosing a single day to buy one stock
and choosing a different day in the future to sell that stock.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

We'll track a maximum profit. That will start at 0, so we can have a good default value in case there are no profits available (in the case that the stock price only goes down)
We'll track a left pointer. The left pointer will start at the beginning of the array.
We'll track a right pointer. The right pointer will start at the beginning of the array + 1 - just after the left pointer.
*/

function maxProfit(prices) {
    // Set up variables to track the max profit we've seen (init at 0),
    // the left pointer (init at day 0)
    // and the right pointer (init at day 1, since we can't buy/sell on the same day)
    let max = 0;
    let left = 0, right = 1;
    // Keep incrementing the right pointer until we hit the end of the prices array.
     while(right < prices.length){
         // The profit on any given day is the difference between the sell date (represented by right pointer)
        // and buy date (represented by the left pointer)
        let profit = prices[right] - prices[left];

        // If we can get a profit higher than we've seen before, set it as our maximum,
        // and we'll keep going.
         if(profit > max) max = profit;

        // If today would be a loss, it means two things: 
        // 1. We don't have a new maximum.
        // 2. We just found a day on which we could buy at a lower price than before, so we should buy now.
        // 
        // The implication of point two is that we move our left pointer (again, as a sliding window) to be the current day,
        // as represented by the right pointer.
         if(profit < 0) left = right;

        // Increment the right pointer to keep searching.
         right++;
     }
   
     return max;
};

console.log(maxProfit([7,1,5,3,6,4]));