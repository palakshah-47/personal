// Find the Missing Element
// Input: two arrays (no negative numbers), the second is the first one shuffled with one element removed.
// eg:
// list_1 = [12, 13, 5, 9, 10, 34, 1]
// list_2 = [34, 13, 5, 10, 12, 1]
// missing = 9

const findMissingElement = (list1, list2) => {
  const counter = {};
  let missingNumber = 0;
  for (let i = 0; i < list1.length; i++) {
    counter[list1[i]] = counter[list1[i]] || 0 + 1;
  }

  for (let i = 0; i < list2.length; i++) {
    if (counter[list2[i]]) {
      counter[list2[i]] = counter[list2[i]] - 1;
    }
  }

  Object.entries(counter).forEach(([key, value]) => {
    if (value !== 0) missingNumber = key;
  });

  return missingNumber;
};

console.log(
  findMissingElement([12, 13, 5, 9, 10, 34, 1], [34, 13, 5, 10, 12, 1])
);
