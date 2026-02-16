/**
 * Definition for a binary tree node.

 */
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//traverse a tree in inorder
function inorderTraversalForRecursive(root, arr) {
	// if(!root) return [];
	// let left = root.left ? inorderTraversal(root.left): [];
	// let right = root.right ? inorderTraversal(root.right): [];
	// let res = [...left, root.val,...right];
	// return res;
	// let res = [];

	/* Recursive Approach */
	if (!root) return arr;
	inorderTraversal(root.left, arr);
	if (root.value !== null) {
		arr.push(root.value);
	}

	inorderTraversal(root.right, arr);

	return arr;
}

function inorderTraversalForIterative(root, k) {
	/* Iterative Approach */
	const stack = [];
	while (true) {
		while (root !== null) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		if (--k === 0 && root) return root.value;
		root = root.right;
	}
}
var tree = new BinarySearchTree();
tree.root = new Node(7);
tree.root.left = new Node(3);
tree.root.right = new Node(10);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(8);
tree.root.right.right = new Node(12);

function kthSmallestElementinBST(root, k) {
	// let arr = inorderTraversalForRecursive(root, []);
	// return arr[k - 1];

	return inorderTraversalForIterative(root, k);
}

const res = kthSmallestElementinBST(tree.root, 7);
console.log(res);

// console.log(TreeNode(1,null,2));
