/*
* Given two strings, find the number of common characters between them.
Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.
*/
function solution(s1, s2) {
    if(!s1.length || !s2.length)return 0;
    let counter = {};
    let map = new Map();
    let res = 0;
    for(let i = 0; i < s1.length; i++){
        // counter[s1[i]] = counter[s1[i]] || 0 + 1;
        map.set(s1[i], map.get(s1[i]) + 1 || 1);
    }
    
    for(let j = 0; j < s2.length; j++){
        if(map.get(s2[j]) === undefined){
            map.set(s2[j], 1);           
        } else{
            if(map.get(s2[j]) > 0){
                res++;
                map.set(s2[j], map.get(s2[j]) -1);                                    
            }           
        }
    }    

     
     return res;
}

console.log(solution("aabcc", "adcaa"));