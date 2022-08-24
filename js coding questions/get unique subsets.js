 /*
 Input: N = 3, arr[] = {2,1,2}
Output:(),(1),(1 2),(1 2 2),(2),(2 2)
Explanation: 
All possible subsets = (),(2),(1),(1,2),(2),(2,2),(2,1),(2,1,2)
After Sorting each subset = (),(2),(1),(1,2),(2),(2,2),(1,2),(1,2,2) 
Unique Susbsets in Lexicographical order = (),(1),(1,2),(1,2,2),(2),(2,2)
 *
 */
    function AllSubsets(arr, n)
    {
        if(!arr.length) return [];
        arr.sort((a, b) => a - b);
        let res = [];

        function getSet(start, temp) {
            res.push(temp);
            for (let i = start; i < arr.length; i++){                              
                if (i === start || arr[i] !== arr[i - 1]) {
                    getSet(i + 1, [...temp, arr[i]]);
                }
            }            
        }
    
        getSet(0, []);
        return res;
    }
    
    function AllSubSets2(arr, n){
        if (!arr.length) return [];
        arr.sort((a, b) => a - b);
        let res = [[]];

        for (let i = 0; i < arr.length; i++){
            let len = res.length;
            for (let j = 0; j < len; j++){
                res.push([...res[j], arr[i]]);
            }
        }

        //remove duplicates using set 
        res = new Set(res.map(arr => JSON.stringify(arr)));
        return Array.from(res, JSON.parse);
    }
    
    
    

console.log(AllSubsets([2,1,2]));
// console.log(AllSubSets2([2,1,2]));