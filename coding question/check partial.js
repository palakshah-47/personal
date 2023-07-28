function search (list, text) {
    let counter = 0;
    for(let i = 0; i< list.length; i++){
        if(list[i].toLowerCase().includes(text.toLowerCase()) || text.toLowerCase().includes(list[i].toLowerCase())) counter++;
        
    }
    
    return counter;
}

let items = ['john', 'dssgTUU', 'pass123'];

var a = "password";
var b = "pass123";

var chunks = a.split("");
var commonsFound = 0;
let result = [];

for (var i = 0; i < chunks.length; i++) {
    console.log(b.indexOf(chunks[i]));
    if(b.indexOf(chunks[i]) != -1) result.push(chunks[i]);
}


console.log(result);