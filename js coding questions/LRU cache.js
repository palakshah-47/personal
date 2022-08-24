/*
* Design a data structure that works like a LRU Cache. Here cap denotes the capacity of the cache and Q denotes the number of queries. Query can be of two types:

SET x y : sets the value of the key x with value y
GET x : gets the key of x if present else returns -1.

The LRUCache class has two methods get() and set() which are defined as follows.

get(key)   : returns the value of the key if it already exists in the cache otherwise returns -1.
set(key, value) : if the key is already present, update its value. If not present, add the key-value pair to the cache. If the cache reaches its capacity it should invalidate the least recently used item before inserting the new item.
In the constructor of the class the capacity of the cache should be intitialized.
*/


// class LRUCache {
//     constructor(capacity){
//         this.capacity = capacity;
//         this.cache = new Map();
//     }   

//     /** 
//  * @param {number} key
//  * @return {number}
//  */
//     get(key) {
//         if(!this.cache.has(key)) return -1;   
//         const val = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, val);
//         return val;  
//     };

//     /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
//     put(key, value) {   
//         this.cache.delete(key);
//         this.cache.set(key, value);      
//         if(this.cache.size > this.capacity){
//             const firstVal = this.cache.keys().next().value;
//             this.cache.delete(firstVal);
//         }   
//     };
// };

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(key, val) {
        let node = new Node(key, val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    remove(node) {
        if (!node.next && !node.prev) {
            this.head = null;
            this.tail = null;
        } else if (!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else if (!node.prev) {
            this.head = node.next;
            this.head.prev = null;
        } else {
            let prev = node.prev;
            let next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        this.length--;
    }
}

class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {};
        this.dll = new DoublyLinkedList();
    }

    get(key) {
        if (!this.map[key]) return -1;
        else {
            let val = this.map[key].value;
            this.dll.remove(this.map[key]);
            this.map[key] = this.dll.push(key, val);
            return val;
        }
    }

    put(key, val) {
        if (this.map[key]) this.dll.remove(key, val);
        this.map[key] = this.dll.push(key, val);
        if (this.dll.length > this.capacity) {
            let firstnodkey = this.dll.head.key;
            delete this.map[firstnodkey];
            this.dll.remove(this.dll.head);
        }
    }
}



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
var param_1 = lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
var param_2 = lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
var param_3 = lRUCache.get(1);    // return -1 (not found)
var param_4 = lRUCache.get(3);    // return 3
var param_5 = lRUCache.get(4);    // return 4

console.log(lRUCache);