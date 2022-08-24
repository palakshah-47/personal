var longestPalindromeSubseq = function(s) {
    if(s.length < 2) return "";
    // let resultStart = 0;
    let resultLen = '';

    // let str = getPalindromic(s);

    if(resultLen === s) return s;
    while(resultLen !== s){
        if(s !== "") resultLen = getPalindromic(s);;        
        if(resultLen !== "") {
            s = s.replace(resultLen, "");
        }         
    }
    // if(resultLen === str) return str;
    // else{
    //     resultLen = str;
    //     s = s.replace(resultLen, "");
    //     if(s !== "") getPalindromic(s);
    // }
    
    // return resultLen;
    // if(resultLen !== str){
    //     resultLen = str;
    //     // let str = s.substring(s.indexOf(resultLen[0]), s.lastIndexOf(resultLen[resultLen.length-1])-1);
    //     console.log(resultLen);
    //     s = s.replace(resultLen, "");
    //     console.log(s);
    //     if(s !== "") getPalindromic(s);
    // } else{
    //     return resultLen;
    // }
    
    

    function getPalindromic(s){
        let newlen = "";
        for(let i = 0 ; i < s.length-1; i++){
            let curlen1 = computePalindrom(s, i, i);
            let curlen2 = computePalindrom(s, i, i+1);
            let len = curlen1.length > curlen2.length ? curlen1 : curlen2;      
            if(len.length > newlen.length) newlen = len;
        }    
        return newlen;
    }
    
    
    
    
    function computePalindrom(s, start, end){
        while(start >= 0 && end < s.length && s[start] === s[end]){
            start--;
            end++;
        }
        // if(resultLen < end-start-1){
        //     resultStart = start + 1;
        //     resultLen = end - start - 1;
        // }
        return s.slice(start+1, end);
    }
    
    
};

console.log(longestPalindromeSubseq("bbbab"));