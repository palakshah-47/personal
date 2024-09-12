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

/*
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn't exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

For example:

For num = 17 and the binary search tree below:

Binary tree
         20
        /  \
       9    25
      / \   
     5   12
         / \
       11   14
Your function would return:

14 since it’s the largest key in the tree that is still smaller than 17.
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

  findLargestSmallerKey(num) {
    let current = this.root;
    let largestSmallerKey = -1;
    while (current !== null) {
      if (current.value >= num) {
        current = current.left;
      } else {
        largestSmallerKey = current.value;
        current = current.right;
      }
    }
    return largestSmallerKey;
  }
}

var bstree = new BinarySearchTree();
// bstree.insert(3);
// bstree.insert(9);
// bstree.insert(20);
// bstree.insert(null);
// bstree.insert(null);
// bstree.insert(15);
// bstree.insert(7);

bstree.insert(20);
bstree.insert(9);
bstree.insert(25);
bstree.insert(5);
bstree.insert(12);
bstree.insert(11);
bstree.insert(14);

console.log(bstree.levelOrder());

var bstree = new BinarySearchTree();
bstree.insert(20);
bstree.insert(9);
bstree.insert(25);
bstree.insert(5);
bstree.insert(12);
bstree.insert(11);
bstree.insert(14);
console.log(bstree.findLargestSmallerKey(17));
