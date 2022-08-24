/**
*Input: 
S = "abccbccba"
Output: ""
Explanation: 
ab(cc)b(cc)ba->abbba->a(bbb)a->aa->(aa)->""(empty string)
**/

  function remove(s) {    
    if(s.length === 0) return s;
    flag = false;

    function duplicates(newStr){
      let str = "";
       let copyStr = newStr + '0';
       let char = copyStr[0];
       let count = 1;
       for(let i = 1; i < copyStr.length; i++){
           if(s[i] != char){
               if(count === 1){
                   str += char;
               }else{
                   count = 1;
               }
               
               char = copyStr[i];
           } else{
               count++;
           }
       }
       return str;
    }
    
      for(let j = 0; j < s.length-1; j++){
          if(s[j] === s[j+1]){
             flag = true;
             break;
          }
      }
      if(!flag){
          return s;
      } else{
         let finalStr = duplicates(s);
        return remove(finalStr);
      }
    
  }  



console.log(remove("abccbccba"));