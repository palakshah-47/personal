/**
 * @param {number} num
 * @return {boolean}
 */
//Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. 
//Return true if reversed2 equals num. Otherwise return false.

var isSameAfterReversals = function(num) {
    if(num === 0) return true;
    let str = String(num);
    if(str[str.length-1] === "0") return false;
    return true;
};

console.log(isSameAfterReversals(1800));