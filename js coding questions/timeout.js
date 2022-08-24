

function findAnagrams(str1, str2){
    if(str1.length !== str2.length) return false;
    let counter1 = {};
    let num = 0;
    for(let i = 0; i < str2.length; i++) {
        counter1[str2[i]] = counter1[str2[i]] || 0 + 1; 
    }

    for(let j = 0; j < str1.length; j++) {
        if(!(counter1[str1[j]])){
            num++;
        }else {
            counter1[str1[j]] -= 1;
        }
    }
   return num;
}

console.log(findAnagrams("abc", "acb"));