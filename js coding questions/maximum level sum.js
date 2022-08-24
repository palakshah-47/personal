/*
* Maximum Level Sum of a Binary Tree
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
*/

class Node {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
//using BFS and iterative
function maxlevelSum(root) {
    if (!root) return 0;
    let maxlevel = 1;   
    let node = root;
    let que = [node];
    let sum = root.val;
    let curlevel = 0;
    while (que.length) {
        curlevel++;    
        let len = que.length;
        let internalsum = 0;
        for (let i = 0; i < len; i++){            
            let newNode = que.shift();
            internalsum += newNode.val;
            newNode.left && que.push(newNode.left);
            newNode.right && que.push(newNode.right);
        }
        if (internalsum > sum) {
            sum = internalsum;
            maxlevel = curlevel;
        }
    }
    return maxlevel;
}

//using DFS and recursive
function DFS(root) {   
    let sums = [-Infinity];    
    callDFS(root, 1);
    return sums.indexOf(Math.max(...sums));

    function callDFS(node, level) {
        if (!node) return;
        if (sums[level] === undefined) sums.push(node.val);
        else sums[level] += node.val;
        
        callDFS(node.left, level + 1);
        callDFS(node.right, level + 1);

    }
}



var tree = new BinarySearchTree();
tree.root = new Node(1);
tree.root.right = new Node(0);
tree.root.left = new Node(7);
tree.root.left.right = new Node(-8);
tree.root.left.left = new Node(7);
tree.root.right.right = new Node(null);
tree.root.right.left = new Node(null);

// console.log(maxlevelSum(tree.root));
console.log(DFS(tree.root));