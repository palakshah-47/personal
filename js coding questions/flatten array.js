/*
Implement flattening an array. You should be able to handle nested arrays of any depth.
Example:
Input: [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]
Implement both iterative and recursive approaches to solve this problem.
*/

function flattenArrayRecursive(arr, depth = Infinity) {
	if (depth < 1) {
		return arr.slice();
	}
	return arr.reduce((result, val) => {
		if (Array.isArray(val)) {
			result.push(...flattenArrayRecursive(val, depth - 1));
		} else {
			result.push(val);
		}
		return result;
	}, []);
}

function flattenArrayIterative(arr) {
	let result = [];
	let stack = [...arr];
	while (stack.length) {
		const next = stack.pop();
		if (Array.isArray(next)) {
			stack.push(...next);
		} else {
			result.unshift(next);
		}
	}
	return result;
}

console.log(flattenArrayRecursive([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArrayIterative([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
