function generateCombinations(input) {
  const output = [];

  // Define a backtracking function
  function backtrack(combination, index) {
    // If the combination is of the desired length, add it to the output
    if (combination.length === Object.keys(input).length) {
      output.push(combination.join(''));
      return;
    }

    // Get the key (list) for the current index
    const key = Object.keys(input)[index];

    // Iterate over the elements of the list corresponding to the current index
    for (const elem of input[key]) {
      // Add the current element to the combination
      combination.push(elem);
      // Recursively call backtrack with the next index
      backtrack(combination, index + 1);
      // Backtrack: remove the last element to explore other possibilities
      combination.pop();
    }
  }

  // Start the backtracking process
  backtrack([], 0);

  return output;
}

const input = {
  1: ['A', 'B', 'C'],
  2: ['D', 'E', 'F'],
  3: ['G', 'H', 'I', 'J'],
};
const result = generateCombinations(input);
console.log(result);
