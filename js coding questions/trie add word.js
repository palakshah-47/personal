// class TrieNode {
//     constructor(value = "") {
//         this.value = value;
//         this.characters = {};
//         this.isWord = false;
//     }
// }

// class Trie {    
//     constructor() {
//         this.root = new TrieNode();        
//     }
//     addWord(word, index = 0) {
//         if(!word) return;
//         let currNode = this.root;
//         for(const letter of word){
//             if(!currNode.characters[letter]){
//                 currNode.characters[letter] = new TrieNode();
//             }
//             currNode = currNode.characters[letter];
//         }
//         currNode.isWord = true;
//     }
// }

class TrieNode {
    constructor(value = 0){
        this.value = value;
        this.parent = null;
    }
}

class Trie {
    constructor() {       
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if(!word) return;
        // let currNode = new Trie();
        // if(index === 0){
        //     node.characters[word[0]] = new Trie();
        // }
        let node = this;
        for(const letter of word){
            if(!node.characters[letter]){
                node.characters[letter] = new Trie();
            }
            // console.log(node.characters);
            node = node.characters[letter];
            // console.log(node.characters);
        }
        node.isWord = true;
        return node;
    }

    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.

        // Be sure to consider what happens if the word is not in this Trie.

        var char = word[index];
        if(!this.characters[char]) return null;
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }

    removeWord(word, index = 0) {
        if(!word) return
        let char = word[index];
        if(!this.characters[char]) return;
        // for(let i = 0; i < word.length; i++){
        //     
        // }
        let subtrie = this.findWord(word)
        if(subtrie){
            if(Object.keys(subtrie.characters).length > 0){
                subtrie.isWord = false;
            } else{
                let parent = this.characters[word[word.length-2]]
                if(parent) parent.characters = {};
            }
        }
        // if (index < word.length - 1 && this.characters[char]) {
        //     index += 1;
        //     return this.characters[char].removeWord(word, index);
        // } else {
        //     return this.characters[char].isWord = false;
        // }
    }
}

// let firstTrie = new Trie();
// firstTrie.addWord("fun");

// console.log(firstTrie.characters.f.characters.u.characters);

// let secondTrie = new Trie();
// secondTrie.addWord("ha")
// secondTrie.addWord("hat")
// secondTrie.addWord("has")
// secondTrie.addWord("have")
// secondTrie.addWord("hate")

// console.log(secondTrie.characters.h.characters.a.characters)




let t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')

t.removeWord('fat')
console.log(t.characters.f.characters.a.characters.t)//undefined
console.log(t.characters.f.characters.a.characters.t.isWord) // false
console.log(t.characters.f.characters.a.characters.t.characters.e.isWord) // true
t.removeWord('argue')

console.log(t.characters.a.characters.r.characters.g.characters.u) // undefined
