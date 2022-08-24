var countVowels = function(word) {
    let vowels = ['a','e','i','o','u'];
    if(!word.length) return 0;   
    let lastVowels = 0, result = 0;
    for(let i = 0 ; i < word.length; i++){
        let newVowels = 0;
        if(vowels.indexOf(word[i]) !== -1){
           newVowels = i + 1;           
        }
        result += newVowels + lastVowels;
        lastVowels = newVowels + lastVowels;
    }
    return result;
};
console.log(countVowels("abcohyuwe"));