//find intersection of 2 comma separated strings in an array
//imput : ["1, 3, 5, 7, 9", "5, 7, 8, 9"];

function findIntersection1(arr) {
    let str1 = arr[0];
    let str2 = arr[1];
    if (str1.length === 0 || str2.length === 0) return "";

    let strArr1 = str1.split(", ");
    let strArr2 = str2.split(", ");
   
    let firstN, secondN = 0, firstArr, secondArr;

    if (strArr1.length > strArr2.length) {
        firstArr = strArr2;
        secondArr = strArr1;
    } else{
        firstArr = strArr1;
        secondArr = strArr2;
    }

    let obj = {};
    let str = "";
    for (let i = 0; i < firstArr.length; i++){
        if (!obj[firstArr[i]]) {
            obj[firstArr[i]] = 1;
            firstN++;
        } 

    }
    for (let j = 0; j < secondArr.length; j++){
        if (obj[secondArr[j]] && str.indexOf(secondArr[j]) === -1) {
            secondN++;           
            str += secondArr[j] + ", ";
            if (secondN === firstN) return str;
        }
    }
    return str;
}
//for multiple arrays 
function findIntersection2(arrList) {
    let arrayCopy = arrList.slice();
    let baseArr = arrayCopy.pop().split(", ");

     return baseArr.filter((item) => {
         return arrayCopy.every(itemlist => {
             return itemlist.indexOf(item) !== -1; 
        })
    })
    
}

function findIntersection(arrList) {
    let arrLength = Object.keys(arrList).length;
    let index = {};
    for (let i in arrList) {
        let arr = arrList[i].split(", ");
        for (let j in arr) {            
            let v = arr[j];
            if (index[v] === undefined) index[v] = {};
            index[v][i] = true;
        }
    }

    let res = [];
    for (let i in index) {
        if (Object.keys(index[i]).length === arrLength) res.push(i);
    }
    return res;

}
console.log(findIntersection(["1, 3, 5, 7, 9", "5, 7, 8, 9", "9", "9, 3"]));

// function math(operation, x) {
//     const ope = {
//         '*': (a, b) => a * b,
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b

//     };

//     return function (y) {
//         return ope[operation](x, y);
//     }
// }

// const mul = math('*', 5);
// const add = math('+', mul(2));

// console.log(typeof add);
// console.log(add(math('-', 25)(20)));