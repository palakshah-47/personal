function PromisePolyfill(executor) {
	let onResolve,
		onReject,
		isFullfilled = false,
		isCalled = false,
		isRejected = false,
		value;

	function resolve(val) {
		isFullfilled = true;
		value = val;
		if (typeof onResolve === 'function') {
			onResolve(value);
			isCalled = true;
		}
	}

	function reject(val) {
		isRejected = true;
		value = val;
		if (typeof onReject === 'function') {
			onReject(value);
			isCalled = true;
		}
	}
	this.then = function (callback) {
		onResolve = callback;
		if (isFullfilled && !isCalled) {
			isCalled = true;
			onResolve(value);
		}
		return this;
	};
	this.catch = function (callback) {
		onReject = callback;
		if (isRejected && !isCalled) {
			isCalled = true;
			onReject(value);
		}

		return this;
	};

	try {
		executor(resolve, reject);
	} catch (err) {
		reject(err);
	}
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
	setTimeout(() => {
		reject('Promise rejected!');
	}, 1000);
});

// examplePromise
// 	.then((result) => {
// 		console.log(result); // Output: "Promise resolved!" after 1 second
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

PromisePolyfill.resolve = function (value) {
	return new PromisePolyfill((resolve) => {
		resolve(value);
	});
};

PromisePolyfill.reject = function (value) {
	return new PromisePolyfill((reject) => {
		reject(value);
	});
};
