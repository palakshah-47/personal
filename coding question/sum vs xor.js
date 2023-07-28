/*
Given an n integer, find each x such that,
n + x = n @ x;
where @ denotes bitwise XOR operator.
i.e if n = 4,
there are four values that meet the criteria:
4 + 0 = 4 @ 0 = 4
4 + 1 = 4 @ 1 = 5
4 + 2 = 4 @ 2 = 6
4 + 3 = 4 @ 3 = 7
so answer is 4.

*/
const solve = (n) => {
    if(n === 0 ) return 1;

    // let zerocountStr = (n).toString(2)
    // let zerocount = zerocountStr.match(/0/gm).length;
    // let count = 2**zerocount;
    // return count;
    for(let i = 0; i <= n ; i++){
        console.log(n^i);
        console.log(2*(n &i));
        console.log((n^i) + 2*(n&i));
        console.log(n+i);
    }
}

console.log(solve(4));