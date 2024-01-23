/*calculate the cumulative sum of an array */

const cumulativeSum = (arr) =>
  arr.reduce((acc, num) => {
    const arr = [...acc, acc.length ? acc[acc.length - 1] + num : num];
    return arr;
  }, []);

console.log(cumulativeSum([10, 15, 20, 25, 30]));
//Input array => 10, 15, 20, 25, 30. Output array => 10, 25, 45, 70, 100.
