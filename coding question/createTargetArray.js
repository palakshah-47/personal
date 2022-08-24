/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
// var createTargetArray = function(nums, index) {
//     let target = [];
    
//     for(let i of nums) {
//         target.splice(index[i], 0, nums[i]);
//     }
//     return target;
    
// };

var createTargetArray = function(nums, indexArr) {
    return indexArr.reduce((result, index, i) => {
        const leftSide = result.slice(0, index);
        const rightSide = result.slice(index);
        return [...leftSide, nums[i], ...rightSide];
    }, []);
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))