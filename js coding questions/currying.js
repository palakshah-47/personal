const curry = (fn) =>{
    const noOfArgs = fn.length;   
    return function f1(...args){
        if(args.length >= noOfArgs){
            console.log('enough arguments');
            return fn(...args);
        } else{
            console.log('need more arguments');
            return function f2(...moreArgs){
                const newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
        
    }
}
// const curriedSum = curry((a,b,c) => a+b+c);
// // const partiallyCurriedSum = curriedSum(1);
// // console.log(partiallyCurriedSum(2,3));
// console.log(curriedSum(1)(2)(3));

const get = curry((prop, obj) => obj[prop]);
console.log(get('id', {id: 1}));
const getId = get('id');
console.log(getId({id: 1}))
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);
console.log(getIds([{id: 1}]));