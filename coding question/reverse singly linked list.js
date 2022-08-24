class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else{
          this.tail.next = newNode;
          this.tail = newNode;          
      }   
        this.length++;
        return this;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;            
        }
        return this;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SLL();
list.push(100);
list.push(201);
list.push(400);
list.push(501);
list.push(1000);

console.log(list.reverse().print());
