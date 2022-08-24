function prefix(str) {
    try {
        return str.substring(0, 3);
    } catch (err) {
        throw err;
        return 'catch';
    }
}

function foo(a) {
    let returnValue = "";
    try {
        if (a === "bar") {
            throw new Error('qux');
        }
        returnValue = "try";
    } catch (err) {
        returnValue = "catch";
    } finally {
        returnValue = "finally";
    }
    return returnValue;
}
console.log(foo("bar"));
console.log(foo('zzz'));