function countAndFlipString(str, requests){
    if (!requests.length) return [];
    let res = [];

    function flip(s) {
        if (s.length) {
            let idx = s.indexOf('1');
            if (idx !== -1) {
                let temp = "";
                for (let i = 0; i <= idx; i++){
                    if (s[i] === '1') temp += '0';
                    else temp += '1';
                }
                s = temp + s.slice(idx + 1);
            }
        }
        return s;
    }

    function countOnes(s) {
        let count = 0;
        for (let j = 0; j < s.length; j++){
            if (s[j] === '1') count++;
        }
        return count;
    }

    for (let i = 0; i < requests.length; i++){
        let word = requests[i];
        if (word === "count") {
            res[i] = countOnes(str);
        } else if (word === "flip") {
            str = flip(str);
            res[i] = countOnes(str);
        }
    }
    return res;
}
console.log(countAndFlipString("0000101", ["count", "flip", "flip", "flip", "count"]));