//Given a string and a dictionary, return if the string can be space-seperated into words in the dictionary.
/*
Input: "helloworldhe", {"he" = true, "hell" = true, "hello" = true, "world" = true}
Output: "helo world he"
*/
const canWeSegmentString = (string, dictionary) => {
	const checkStringRecursively = (index, currentString) => {
		console.log('index: ', index, 'currentString: ', currentString);
		if (index === string.length) {
			return currentString.trim();
		}
		let word = '';
		for (let i = index; i < string.length; i++) {
			word += string[i];
			console.log('word: ', word);
			if (dictionary[word]) {
				const result = checkStringRecursively(i + 1, currentString + word + ' ');
				console.log('result: ', result);
				if (result) {
					return result;
				}
			}
		}
		return null;

		// dp version
		// if (index === string.length) {
		//     return '';
		// }
		// if (index in memo) {
		//     return memo[index];
		// }

		// let word = '';
		// for (let i = index; i < string.length; i++) {
		//     word += string[i];
		//     if (dictionary[word]) {
		//         const result = checkStringRecursively(i + 1);
		//         if (result !== null) {
		//             memo[index] = word + (result ? ' ' + result : '');
		//             return memo[index];
		//         }
		//     }
		// }

		// memo[index] = null;
		// return null;
	};

	const result = checkStringRecursively(0, '');
	return result || 'Segmentations not possible';
};

console.log(
	'output: ',
	canWeSegmentString('helloworldhe', { he: true, hell: true, hello: true, world: true })
); // true
