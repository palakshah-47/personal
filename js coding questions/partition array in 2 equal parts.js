/*
* Given an array of integers a of even length, your task is to split it into two arrays of equal length such that all the numbers are unique in each of them.
There may be more than one possible answer, in which case you may return any of them. If there are no possible answers, return an empty array.
A = [2,1,2,3,3,4] divideArray(a) = [[2,1,3], [2,3,4]]
Answers like [[1,2,3], [2,3,4]] or 4,2,3],[3,2,1]] would also be considered correct.
A = [1,2,2,1], the output can be 1,2],[2,1]
For a = [2,2,3, 3,2,2], the output should be [], as anyhow we slpit the array at least two 2s in at least one arrays which is not unique elements.
Hint: Count the number of occurrences of each integer in a. 
If there are integers occurring more than twice, then there is no solution. 
Next, put the integers occurring twice into both answer arrays. 
Finally, put all other numbers in the answer arrays, following the condition that they should have equal sizes.
*/

function findSubArrays(a) {
    let res1 = [];
    let res2 = [];
    let counter = {};
    for (let i = 0; i < a.length; i++){
        counter[a[i]] = counter[a[i]] + 1 || 1;        
    }

    let values = Object.values(counter);    
    let max = Math.max(...values);
    if (max >= 3) return [];

    for (let i = 0; i < a.length; i++){
        if (counter[a[i]]) {
            if (counter[a[i]] === 2) {
                res1.push(a[i]);
                res2.push(a[i]);
                counter[a[i]] = counter[a[i]] - 2;
            }
            else if (counter[a[i]] === 1) {
                if (res1.length <= res2.length) res1.push(a[i]);
                else if(res2.length < res1.length) res2.push(a[i]);
            }
        }
    }
    
    if (new Set(res1).size === res1.length && new Set(res2).size === res2.length) return [res1, res2];
    return [];
}

console.log(findSubArrays([2,1,2,3,3,4]));