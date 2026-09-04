function importantAction(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Important action completed for ${username}`);
		}, 1000);
	});
}

function likeTheVideo(video) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Liked the video: ${video}`);
		}, 1000);
	});
}

function shareTheVideo(video) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Shared the video: ${video}`);
		}, 1000);
	});
}

function allPolyfill(promises) {
	return new Promise((resolve, reject) => {
		let results = [];

		if (!promises.length) {
			resolve(results);
			return;
		}

		let pending = promises.length;

		promises.forEach(async (promise, index) => {
			try {
				const value = await promise;
				results[index] = value;
				pending--;
				if (pending === 0) {
					resolve(results);
				}
			} catch (error) {
				reject(error);
			}
		});
	});
}

allPolyfill([
	importantAction('John'),
	likeTheVideo('JavaScript Tutorial'),
	shareTheVideo('JavaScript Tutorial'),
])
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.error(`Failed with error: ${error}`);
	});

// Promise.all([
// 	importantAction('John'),
// 	likeTheVideo('JavaScript Tutorial'),
// 	shareTheVideo('JavaScript Tutorial'),
// ])
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});
