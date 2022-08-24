class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}


// const maxPathSum = (root) => {
// 	let max = -Infinity;

// 	const findSums = (node) => {
// 		// Base case / hit a null
// 		if (!node) return 0;

// 		let left = findSums(node.left),
// 			right = findSums(node.right),
// 			allSum = left + right + node.value,
// 			leftNodeSum = left + node.value,
// 			rightNodeSum = right + node.value;

// 		// Max is all possible combinations
// 		max = Math.max(max, node.value, allSum, leftNodeSum, rightNodeSum);
		
// 		// Return the MAX path, which can be node.val, left + node.val, or right + node.val
// 		return Math.max(leftNodeSum, rightNodeSum, node.value);
// 	};

// 	findSums(root);

// 	return max;
// };

const pathSum = (root, sum, res = [], path = []) => {
	if(!root) return res;
	if(root.val > sum) return res;
	if(root){
		path.push(root.value);
		if(!root.left && !root.right && sum-root.value === 0) res.push([...path]);
		pathSum(root.left, sum-root.value, res, path);
		pathSum(root.right, sum-root.value, res, path);
		path.pop();
	}
	return res;
}

// var tree = new BinarySearchTree();
// tree.root = new Node(1);
// tree.root.right = new Node(3);
// tree.root.left = new Node(2);

var tree = new BinarySearchTree();
tree.root = new Node(5);
tree.root.right = new Node(8);
tree.root.left = new Node(4);
tree.root.left.left = new Node(11);
tree.root.left.left.left = new Node(7);
tree.root.left.left.right = new Node(2);
tree.root.right.left = new Node(13);
tree.root.right.right = new Node(4);
tree.root.right.right.left = new Node(5);
tree.root.right.right.right = new Node(1);


//[5,4,8,11,null,13,4,7,2,null,null,5,1]

// console.log(maxPathSum(tree.root));

console.log(pathSum(tree.root, 22));