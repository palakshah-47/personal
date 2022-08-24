/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    // let totalCount = 0;
    // let currCount = 1;
    let counter = {};
    for(let i = 0; i < rectangles.length; i++){
        let ratio = rectangles[i][0]/ rectangles[i][1];
        if(counter[ratio]) counter[ratio] = counter[ratio] + 1;
        else{
            counter[ratio] = 1;
        }
     
    }
    let values = Object.values(counter);
    let sum = 0;
    for(let k of values){
       sum += k > 0 ? (k * (k-1))/2 : 0; 
    }
    return sum;
};

console.log(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]]));