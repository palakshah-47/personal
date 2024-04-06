/*
Input:
      6
     / \
    3   4
   /   / \
  5   1   0
   \     /
    2   8
   / \
  9   7
Output: 5 9 3 2 6 1 7 ...

*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function verticalTraversal(root) {
  if (root === null) return [];
  const columnMap = {};
  const que = [{ node: root, column: 0 }];
  while (que.length) {
    const { node, column } = que.shift();
    if (!columnMap[column]) columnMap[column] = [];
    if (node.val) columnMap[column].push(node.val);

    if (node.left) que.push({ node: node.left, column: column - 1 });
    if (node.right) que.push({ node: node.right, column: column + 1 });
  }

  const sorted = Object.keys(columnMap)
    .map(Number)
    .sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    result.push(...columnMap[sorted[i]]);
  }
  return result;
}

const root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(0);
root.left.left.left = new TreeNode(null);
root.left.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(null);
root.left.right.right = new TreeNode(null);
root.left.left.right.left = new TreeNode(9);
root.left.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(8);

console.log(verticalTraversal(root));
