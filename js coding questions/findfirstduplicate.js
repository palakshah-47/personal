let array = new Array();
array = [1, 2, 2, 3, 4, 4, 5];

const findFirstDuplicate = (arr)  => {
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++;
        } else {
            return arr[i];
         }
    }
}

console.log(findFirstDuplicate([1, 2, 2, 3, 4, 4, 5]));
