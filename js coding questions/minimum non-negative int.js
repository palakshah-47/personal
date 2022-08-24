//Given an integer N, return the smallest non-negative number whose individual digits sum upto N.
function getSum(n) {
	let sum = 0;
	while (n != 0) {
		sum = sum + n % 10;
		n = Math.floor(n / 10);
	}
	return sum;
}
function getSmellestNumber(num){
	let i = 1;
	while (i) {
		let sum = getSum(i);
		if (sum === num) {
			return i;
		}
		i++;
	}
}
console.log(getSmellestNumber(10));