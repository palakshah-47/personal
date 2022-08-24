/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+ str2 !== str2 + str1) return "";
    const calc = (a,b) => {
        return 0 === b ? a : calc(b, a % b)
    };
    return str1.substring(0, calc(str2.length, str1.length));
};

console.log(gcdOfStrings("ABC", "ABCABC"));


// var findGCD = function(nums) {
//     const gcd = (a,b) => {
//         return 0 === b ? a : gcd(b, a%b);
//     }
    
//     return gcd(Math.max(...nums), Math.min(...nums));
// };

// console.log(findGCD([7,5,6,8,3]));