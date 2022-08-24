/**
 * Definition for a binary tree node.

 */
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

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//traverse a tree in inorder
function inorderTraversal(root) {
    // if(!root) return [];
    // let left = root.left ? inorderTraversal(root.left): [];
    // let right = root.right ? inorderTraversal(root.right): [];
    // let res = [...left, root.val,...right];
    // return res;
    let res = [];
    
    function traverse(node){
        if(!node) return;
        traverse(node.left);
        if(node.value !== null){
          res.push(node.value);  
        }
        
        traverse(node.right);
    }
    
    traverse(root);
    return res;
};

var tree = new BinarySearchTree();
tree.root = new Node(1);
tree.root.left = new Node(null);
tree.root.right = new Node(2);
tree.root.right.left = new Node(3);

// console.log(TreeNode(1,null,2));

 console.log(inorderTraversal(tree.root));