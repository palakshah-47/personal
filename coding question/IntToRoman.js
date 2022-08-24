var intToRoman = function(num) {
    
    let valObject = {
        'M':1000,
        'CM':900,        
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1,        
    }
    let result = '';    

    for (s in valObject){
        const v = valObject[s];
        while (num >= v){
            num -= v;
            result += s;
        }    
    }
    
    return result;
};

console.log(intToRoman(20));