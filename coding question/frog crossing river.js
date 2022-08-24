/*
*A frog is crossing a river. The river is divided into some number of units, 
and at each unit, there may or may not exist a stone. The frog can jump on a stone, 
but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, 
determine if the frog can cross the river by landing on the last stone. 
Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. 
The frog can only jump in the forward direction.

Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, 
then 2 units to the 3rd stone, then 2 units to the 4th stone, 
then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
*/

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let pos = new Set(stones);
    return helper(pos, stones[stones.length-1]);
    
    function helper (pos, end, cur = 0, jump = 1, memo = new Map()){
        if(!pos.has(cur)) return false;
        let key = cur + ','+jump;
        if(memo.has(key)) return memo.get(key);
        if(cur === end) return true;
        let less = jump > 1 ? helper(pos, end, cur+jump, jump-1, memo): false;
        memo.set(key, less || helper(pos, end, cur+jump, jump, memo) || 
                 helper(pos, end, cur+jump, jump+1, memo));
        return memo.get(key);
    }    
    
};

console.log(canCross([0,1,3,5,6,8,12,17]));