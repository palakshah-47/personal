class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(val < current.value){
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else{
                        current = current.left;
                    }
                } else if(val > current.value){
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else{
                        current = current.right;
                    }
                } else return this;
                
            }
        }
    }

    BFS() {
        let data = [], queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];        
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
           if(node.left) traverse(node.left);
           if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
}

var bstree = new BinarySearchTree();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);





