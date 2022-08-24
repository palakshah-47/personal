/*
* Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function solution(inputString) {
        
    while(inputString.indexOf('(') != -1) {
        let openBracket, closeBracket;
        
        for (let i = 0; i < inputString.length; i++) {
            if(inputString[i] == '(')
                openBracket = i;
            else if(inputString[i] == ')') {
                closeBracket = i;
                break;
            }
                
        }
            
        let subString = inputString.slice(openBracket, Math.min(inputString.length, closeBracket+1));
        let temp = '';
        
        for (let i = subString.length - 2; i > 0; i--)
            temp = temp.concat(subString[i]);
        
        inputString = inputString.slice(0, openBracket) + temp + inputString.slice(closeBracket + 1);
    }
        
    return inputString;
}

console.log(solution("foo(bar(baz))blim"));