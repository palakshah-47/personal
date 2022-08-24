var isValid = function(s) {
    if(s.length === 1) return false;
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    
    let stack = [];
    for (let i = 0; i < s.length; i++){
        let ch = s[i];
        if(map[ch]){
            stack.push(map[ch]);
        }else if(ch !== stack.pop()){
            return false;
        }
    }
    return !stack.length;
};

console.log(isValid("{[()]}"));