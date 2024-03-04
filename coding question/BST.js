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

  BFS() {
    let data = [],
      queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traversInorder(node) {
      if (node.left) traversInorder(node.left);
      data.push(node.value);
      if (node.right) traversInorder(node.right);
    }
    traversInorder(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSPreOrderIterative() {
    const stack = [],
      data = [];
    let curr = this.root;

    while (stack.length || curr) {
      while (curr) {
        data.push(curr.value);
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      curr = curr.right;
    }

    return data;
  }

  DFSInOrderIterative() {
    const stack = [],
      data = [];
    let curr = this.root;

    while (stack.length || curr) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      data.push(curr.value);
      curr = curr.right;
    }
    return data;
  }

  DFSPostOrderIterative() {
    const stack = [],
      data = [];
    stack.push(this.root);

    while (stack.length) {
      let curr = stack.pop();
      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
      data.push(curr.value);
    }
    return data.reverse();
  }
}

var bstree = new BinarySearchTree();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);
console.log(bstree.DFSPreOrder());
console.log(bstree.DFSInOrder());
console.log(bstree.DFSPostOrder());
console.log(bstree.DFSPreOrderIterative());
console.log(bstree.DFSInOrderIterative());
console.log(bstree.DFSPostOrderIterative());
