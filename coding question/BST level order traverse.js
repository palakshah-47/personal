/*
* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
*/

const levelOrder = (root) => {
  if (root === null) return [];

  if (root !== null && !root.left && !root.right) return [[root.val]];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const numbers = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      numbers.push(node.val);
    }
    result.push(numbers);
  }
  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
