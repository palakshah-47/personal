/*
* Given a matrix of integers, we would like to consider the sum of elements within
the area of 45 degree rotated rectangle. The dimensions of the rotated rectangle are defined by the number of 
elements along the borders of the rectangle.
Given integers a and b representing the dimensions of th rotated rectangle, and matrix of integers, your task
is to find the greatest sum of integers contained within an a x b rotated rectangle.
the order of the dimensions is not important - consider all a x b and b x a rectangles.
matrix = [[1,2,3,4,0]],
          [5,6,7,8,1],
          [3,2,4,1,4],
          [4,3,5,1,6]]
a = 2, b =3, the output should be rotatedRectSum(matrix, a, b) = 36

1 2 3 4 0
5 6 7 8 1
3 2 4 1 4
4 3 5 1 6
 
 rectangles are : 2+5+6+7+2+4+1+5 = 32, 3+6+7+8+4+1+4+1 = 34, 3+6+7+8+3+2+4+3 = 36
*/

function findMaxSumInRectangle(matrix, a, b) {
    let maxSum = 0;
    for (let x = 0; x < matrix.length; x++){
        for (let y = 0; y < matrix[0].length; y++){
            let sum = 0;
            let canBeRectangle = true;
            for (let lengthMoves = 0; lengthMoves < a && canBeRectangle; lengthMoves++){
                //both below values increase one each time.
                let columnNoOfStartingPointOfDiagonal = x + lengthMoves;
                let rowNoOfStartingPointOfDiagonal = y + lengthMoves;
                for (let breadthMoves = 0; breadthMoves < b && canBeRectangle; breadthMoves++){
                    if (columnNoOfStartingPointOfDiagonal - breadthMoves >= 0 &&
                        columnNoOfStartingPointOfDiagonal - breadthMoves < matrix[0].length &&
                        rowNoOfStartingPointOfDiagonal + breadthMoves < matrix.length) {
                        sum += matrix[rowNoOfStartingPointOfDiagonal + breadthMoves][columnNoOfStartingPointOfDiagonal - breadthMoves]; 
                    } else { 
                        canBeRectangle = false;
                    }
                }
                if (lengthMoves < a - 1) {
                    columnNoOfStartingPointOfDiagonal = x + lengthMoves;
                    rowNoOfStartingPointOfDiagonal = y + lengthMoves + 1;
                    for (let breadthMoves = 0; breadthMoves < b - 1 && canBeRectangle; breadthMoves++){
                        if (columnNoOfStartingPointOfDiagonal - breadthMoves >= 0 && 
                            rowNoOfStartingPointOfDiagonal + breadthMoves < matrix.length) {
                            sum += matrix[rowNoOfStartingPointOfDiagonal + breadthMoves][columnNoOfStartingPointOfDiagonal - breadthMoves];
                        } else {
                            canBeRectangle = false;
                        }
                    }
                }
            }
            if (canBeRectangle) maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

console.log(findMaxSumInRectangle([[1, 2, 3, 4, 0], [5, 6, 7, 8, 1], [3, 2, 4, 1, 4], [4, 3, 5, 1, 6]], 2, 3));