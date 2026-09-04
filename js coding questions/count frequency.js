function countFrequency(string) {
	const str = string.toLowerCase();
	const map = new Map();
	for (let char of str) {
		map.set(char, (map.get(char) || 0) + 1);
	}
	for (let [char, count] of map.entries()) {
		console.log('char: ' + char, 'count: ' + count);
	}
}

countFrequency('Hello World');
