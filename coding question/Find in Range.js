/**
 *  Write a function dataFinder which returns a function with min and max range and a target value.
 * if the target value is found within the range, return true else false.
 * if min or max range is out of bound return an error with 'Range out of bound' message.
 *  input: ([15, 1, 10, 5, 4, 20], 1, 4, 4)
 *  input has data, minRange, maxRange and target
 *  output: true
 */
function dataFinder(data, min, max, target) {
  function find() {
    if (min < 0 || max > data.length - 1) return new Error('Invalid range');
    let newArr = data.slice(min, max + 1);
    newArr.sort((a, b) => a - b);
    let left = 0;
    let right = newArr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (newArr[mid] === target) return true;
      else if (newArr[mid] < target) left = mid + 1;
      else right = mid;
    }
    return false;
  }

  return find();
}

console.log(dataFinder([15, 1, 10, 5, 4, 20], 1, 4, 4));
