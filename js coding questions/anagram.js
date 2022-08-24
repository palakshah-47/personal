    function isAnagram(a, b) {
        
    if(a.length !== b.length) return "NO";
    if(a.length === 1) return a[0] === b[0];
    
    
    let counter = {};
    
    for(let val = 0; val < a.length; val++) {
        counter[a[val]] = counter[a[val]] || 0 + 1;
    }
    
    for(let val = 0; val < b.length; val++) {
        if(counter[b[val]]) {
           counter[b[val]] -= 1;
        } else{
            counter[b[val]] = 1;
        }
    }
    
     if(Object.values(counter).every(val => val !== 0)) return "NO" ;
      return "YES";
    }

console.log(isAnagram("aabaa", "baaaaa"));