/**
 * @param {number[]} fruits
 * @return {number}
 *You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
 */
var totalFruit = function(fruits) {
    if(!fruits.length) return 0;
    let uniqueFruits = new Map();
    let start = 0, result = 0;
    for(let end = 0; end < fruits.length; end++){
        uniqueFruits.set(fruits[end], uniqueFruits.get(fruits[end]) + 1 || 1);             
        while(uniqueFruits.size > 2 && start < fruits.length){            
            let val = uniqueFruits.get(fruits[start]);            
            if(val - 1 === 0) {
                uniqueFruits.delete(fruits[start]);
            } else {
                uniqueFruits.set(fruits[start], uniqueFruits.get(fruits[start])-1);        
            }           
            start++;
        } 
        
      if(uniqueFruits.size >= 1){
         result = Math.max(result, end - start + 1);
      }
        
    }
   
    return result;
};

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));