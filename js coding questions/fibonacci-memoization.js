// const fibonacci = (n, cache = {}) => {
//     if(n <= 1) return n;
//     if(cache[n]) return cache[n];
//     return cache[n] = fibonacci(n-1, cache) + fibonacci(n-2, cache);
// }

// const memoizedFibonacci = memoize(fibonacci);

// function momoize (fn) {
//     const cache = {};

//     return function(...args){
//         const key = JSON.stringify(args);

//         if(key in cache) return cache[key];
//         else{
//             const result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     }

// }
// console.log(memoizedFibonacci(10));


const getFibonacci = (n) => {
    let dp = {0: 0,1: 1};
    let result = [0,1];

   for(let i = 2; i <n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
    result.push(dp[i]);
   }

   return result;

}

console.log(getFibonacci(5));