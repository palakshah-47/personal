function validAnagram(int1, int2) {
  let str1 = int1.toString();
  let str2 = int2.toString();
 
    if(str1.length !== str2.length){
        return false;
    }  
    let counter1 = {};
    
    for(let i = 0; i < str1.length; i++) {
        counter1[str1[i]] = counter1[str1[i]]++ || 1; 
    }    

    for(let j = 0; j < str2.length; j++) {
        if(!(counter1[str2[j]])){
            return false;
        }else {
            counter1[str2[j]] -= 1;
        }
    }
    
    let isSame = true;
    Object.values(counter1).every(val =>{
        if(val !== 0) isSame = false;
    });
    return isSame;

  // let counter = new Array(60).fill(0);

  //   for(let i = 0; i < str1.length; i++) {
  //       console.log(counter[str1.charCodeAt(i)]);
  //       counter[str1.charCodeAt(i)]++; 
  //   }

  //    for(let i = 0; i < str2.length; i++) {
  //      console.log(counter[str2.charCodeAt(i)]);
  //       counter[str2.charCodeAt(i)]--; 
  //   }

  //   let isSame = true;

  //   for(let i =0; i< counter.length; i++){
  //     if(counter[i] !== 0) isSame = false;
  //   }
   
  //    return isSame;
  
  
}

 console.log(validAnagram(123, 312));

function isPalindrom(str) {
    if(str.length === 0 || str.length === 1) return true;
    if(str.length === 2) if(str[0] === str[1]) return true;
    for(let i = 0 ; i < str.length; i++) {
      if(str[i] === str[str.length-1]) return isPalindrom(str.slice(1, -1));
    }
    // let str1 = str.split("").reverse().join("");    
 
    // if(str !== str1) return false;
  
   // return true;
}

// console.log(isPalindrom("racecar"));

