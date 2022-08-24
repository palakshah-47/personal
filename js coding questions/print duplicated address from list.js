/*
* "test , Tokyo,test@g.com,123",
  "test , Rio,test2@g.com,124",
  "test , Moscow,test3@g.com,125"
  Ans: [{},{},{}] //all three bcs name is same

 "test1 , Tokyo,test@g.com,123",
 "test2 , Rio,test@g.com,124",
 "test3 , Moswcow,test3@g.com,125"
 Ans: [{test1 , Tokyo,test@g.com,123}{test2 , Rio,test@g.com,124}] // 2 emails are same
*/

class Addr{
    constructor(name, city, email, uniqGuid) {
        this.name = name;
        this.city = city;
        this.email = email;
        this.uniqGuid = uniqGuid;
    }   
}


    function findDuplicates(addressList) {
        let map = new Map();
        let set = new Set();
        let duplicates = new Set();
        let i = 0;
        for (let el of addressList) {
            if (map.has(el.name) || set.has(el.city) || set.has(el.email) || set.has(el.uniqGuid)) {
                duplicates.add(el);
                let index = map.get(el.name);
                duplicates.add(addressList[index]);                
            }
            map.set(el.name, i);
            set.add(el.city);
            set.add(el.email);
            set.add(el.uniqGuid);
        }
        return [...duplicates];
    }

// let addr = new Addr("test", "Tokyo", "test@g.com", "123");
// let addr1 = new Addr("test", "Rio", "test@g.com", "124");
// let addr2 = new Addr("test", "Moscow", "test@g.com", "125");

let addr = new Addr("test1", "Tokyo", "test@g.com", "123");
let addr1 = new Addr("test2", "Rio", "test@g.com", "124");
let addr2 = new Addr("test3", "Moscow", "test2@g.com", "125");

let arr = new Array();
arr.push(addr);
arr.push(addr1);
arr.push(addr2);


console.log(findDuplicates(arr));