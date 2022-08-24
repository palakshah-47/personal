/*
* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is 
being repeated exactly k times. Note that k is guaranteed to be a positive integer.
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

idea: 
if s[i] != ']' keep pushing everything in stack
when s[i] = '[' then pop everything from stack and repeat the string for no of times and push back to stck to keep track

*/

function decodeString(s) {
    let i = 0;
    let stack = [];

    while (i < s.length) {
        if (s[i] !== ']') {
            stack.push(s[i++]);
            continue;
        }
        let str = '', n = '', segment = '';
        //build up str
        while (stack[stack.length - 1] !== '[') {
             str += stack.pop();
        }

        //pop the '[' bracket
        stack.pop();

        //build up the number
        while (!isNaN(stack[stack.length - 1])) {
            n = stack.pop() + n;
        }

        segment += str.repeat(Number(n));

        //push back the segment into stack
        stack.push(segment);

        i++;      
    }
    return stack.join("");
}

console.log(decodeString("3[a]2[bc]"));