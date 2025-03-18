const splitAndReverseArray = (array) => {
	let chunk = 5;
	let chunks = [];
	for (let i = 0; i < array.length; i += chunk) {
		chunks.push(array.slice(i, i + chunk));
	}

	chunks.forEach((chunk, index) => {
		if (index % 2 !== 0) chunk.reverse();
	});
	return chunks.flat();
};

console.log(
	splitAndReverseArray([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
		26, 27, 28, 29, 30,
	])
);

//output: [1,2,3,4,5,10,9,8,7,6,11,12,13,14,15,20,19,18,17,16, 21,22,23,24,25,30,29,28,27,26]
