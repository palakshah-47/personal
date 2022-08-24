/*
* Given array of arrays and an array, check if after merging elements of 2d array,
wihtout separating its array elements if it is able to make smae array as give.
ex: arr=[1,2,3,5]
    arrays = [[3],[1,2],[5]];
    output = true;

    arr[1,2,3,6,9]
    arrays = [[3,6],[1],[2]];
    output = false, as no total no of elements are matching between 2 arrays
*/

function combine(arr, arrays) {
    let res = [];

    function flatten(ary, ret = []) {
        return ary.reduce((ret, entry) => {
            if (Array.isArray(entry)) {
                flatten(entry, ret);
            } else {
                ret.push(entry);
            }
            return ret;
        }, ret);
    }

    function mergeArray() {
        for (let i = 0; i < arrays.length; i++) {
            let result = [];
            // if (Array.isArray(arrays[i])) {
            result = [...result, arrays[i], ...arrays.slice(0, i), ...arrays.slice(i + 1)];
            result = flatten(result);
            res.push(result);
           
        }
    }
    
    mergeArray();
    let isSame = false;
    for (let i = 0; i < res.length; i++){
        let val = res[i];
        if (val.toString() === arr.toString() && val.length === arr.length) isSame = true;
    }

    return isSame;
}

console.log(combine([1, 2, 3, 5], [[3], [1, 2], [5]]));