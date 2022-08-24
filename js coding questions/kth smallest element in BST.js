/*
* Given a BST and an integer K. Find the Kth Smallest element in the BST. 
Input:
      2
    /   \
   1     3
K = 2
Output: 2
*/


class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}


/**
 * @param {Node} root
 * @param {number} K
 * @return {number}
*/
class Solution {
    constructor(){
         this.ans = -1, this.count = 0;
    }
   
    KthSmallestElement(root, K) {
        if(!root) return -1;
        if(root.left === null && root.right === null && K > 1) return -1;
        this.inorder(root, K);
        return this.ans;
    }
    
    inorder(root, K){
        if(root === null) return;
        this.inorder(root.left, K);
        this.count++;
        if(this.count === K){
            this.ans = root.data;
        }
        this.inorder(root.right, K);
    }
}

let node = new Node(2);
node.left = new Node(1);
node.right = new Node(3);

let sol = new Solution();

console.log(sol.KthSmallestElement(node, 2));