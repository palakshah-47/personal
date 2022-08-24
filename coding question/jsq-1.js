
function doReverse(p1) {
	return p1.split("").reverse().join("")
}

function someFunction(p1, p2, p3) {
	p1 = doReverse(p1);
	p2 = ['1', '2', '3'];
	p3.push('9999');
    console.log(p1);
    console.log(p2);
    console.log(p3);    
}

const a = 'xyz';
const b = ['123', '567'];
const c = ['abc', 'def'];

someFunction(a, b, c);

console.log(a);
console.log(b);
console.log(c);
