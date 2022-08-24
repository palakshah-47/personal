var reverse = function(x) {
    if(x < 0) return -1 * reverse(-x);
    let num = x.toString().split("").reverse().join("");
    // num = num.reverse().join("");
    return num > 2**31 -1 ? 0 : num;    
};

console.log(reverse(-123));