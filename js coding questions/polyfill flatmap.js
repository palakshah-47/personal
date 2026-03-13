Array.prototype.myFlatMap = function (callback, thisArg) {
    const result = [];  
    if (this == null) {
      throw new TypeError('Array.prototype.myFlatMap called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        const callbackResult = callback.call(thisArg, this[i], i, this);
        if (Array.isArray(callbackResult)) {
          result.push(...callbackResult);
        } else {
          result.push(callbackResult);
        }
      }

    }
    return result;
  };

  console.log([1, 2, 3].myFlatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]
  console.log([1, 2, 3].myFlatMap(x => x * 2)); // Output: [2, 4, 6]    