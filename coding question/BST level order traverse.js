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

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else return this;
      }
    }
  }
  levelOrder() {
    if (this.root === null) return [];

    if (this.root !== null && !this.root.left && !this.root.right)
      return [[root.value]];

    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const numbers = [];
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (node && node.left) {
          queue.push(node.left);
        }
        if (node && node.right) {
          queue.push(node.right);
        }
        numbers.push(node.value);
      }
      result.push(numbers);
    }
    return result;
  }
}

var bstree = new BinarySearchTree();
bstree.insert(3);
bstree.insert(9);
bstree.insert(20);
bstree.insert(null);
bstree.insert(null);
bstree.insert(15);
bstree.insert(7);

console.log(bstree.levelOrder());
