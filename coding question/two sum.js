function twoSum(numbers, target) {
    // let left = 0;
    // let right = numbers.length -1;
    // let sum = numbers[left] + numbers[right];
    // if(sum === target) return [left+1, right+1];
    // while(sum != target){
    //     sum < target ? left++ : right--;
    //     sum = numbers[left] + numbers[right];
    // }    
    // return [left+1, right+1];
    let result = {};
    for(let i = 0; i < numbers.length; i++){
        let num = target - numbers[i];
        if(num in result) {
            return [result[num]+1, i+1]; 
        } 
        result[numbers[i]] = i;
              
    }
    return [];
};

function twoSumSortedArr(numbers, target) {
    let left = numbers[0];
    let right = numbers[numbers.length-1];
    let sum = left + right;
    if(target === sum) return [left+1, right+1];
    while(sum !== target){
        sum < target ? left++ : right--;
        sum = numbers[left] + numbers[right];
    }
    return [left+1, right+1];
}

 console.log(twoSum([4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8], -3));
// console.log(twoSumSortedArr([2,7,11,15], 9));