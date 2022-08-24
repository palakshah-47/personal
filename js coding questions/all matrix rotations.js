/*
//1. rotate square matrix by 90 degree clockwise
1,2,3           7,4,1
4,5,6   =====>  8,5,2
7,8,9           9,6,3
step 1: transpose a matrix( flip all colums and rows): 
1,2,3           1,4,7
4,5,6   =====>  2,5,8
7,8,9           3,6,9
step 2: reverse matrix columns:
1,4,7           7,4,1
2,5,8   =====>  8,5,2
3,6,9           9,6,3
*/

function rotateMatrixClock90(matrix) {
    //Transpose the matrix
    transposeMatrix(matrix);
    //Reverse the columns
    reverseColmuns(matrix);    
    return matrix;
}

/*
2. - Rotate Square matrix by 90 deg anti-clockwise // 270deg clockwise

1,2,3           3,6,9
4,5,6   =====>  2,5,8
7,8,9           1,4,7
step 1: transpose matrix rows and columns:
1,2,3           1,4,7
4,5,6   =====>  2,5,8
7,8,9           3,6,9
step 2: reverse the rows
1,4,7           3,6,9
2,5,8   =====>  2,5,8
3,6,9           1,4,7
*/

function rotateMatrixAnticlockwise(matrix) {
    //tarnspose a matrix with swapping columns and rows
    transposeMatrix(matrix);
    //reverse the rows
    reverseRows(matrix);
    return matrix;
}

/*
* rotate matrix by 180 degree clockwise
1,2,3           9,8,7
4,5,6   =====>  6,5,4
7,8,9           3,2,1
step 1: reverse the columns of a matrix:
1,2,3           3,2,1
4,5,6   =====>  6,5,4
7,8,9           9,8,7
step 2: reverse the rows of a matrix:
3,2,1           9,8,7
6,5,4   =====>  6,5,4
9,8,7           3,2,1
*/
function rotateMatrix180Degree(matrix) {
    reverseColmuns(matrix);
    reverseRows(matrix);
    return matrix;
}

function transposeMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = i; j < matrix[0].length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }    
}

function reverseColmuns(matrix) {
    let n = matrix[0].length;
    for (let i = 0; i < matrix.length; i++){
        let left = 0, right = n - 1;
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }    
}

function reverseRows(matrix) {
    let n = matrix[0].length;   
    let bottom = n - 1, top = 0;
        while (bottom > top) {
            [matrix[bottom], matrix[top]] = [matrix[top], matrix[bottom]];
            top++;
            bottom--;
    }
    
   
}

/*
* Rotate rectengular matrix  by 90 degree clockwise (can't done in place)
 1, 2, 3, 4            9, 5, 1
 5, 6, 7, 8   =====>  10, 6, 2
 9,10,11,12           11, 7, 3
                      12, 8, 4
 step 1: Initialize new matrix of N by M and fill all with 0
 step 2: copy all values for each column and row to each row and column
*/

function rotateRecMatrixBy90(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let newMatrix = new Array(n).fill(0).map(_ => new Array(m).fill(0));
    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            newMatrix[j][m - i - 1] = matrix[i][j];
        }
    }
    return newMatrix;
}

/*
* Rotate rectengular matrix by 90 degree anti-clockwise( can't done in place)
 1, 2, 3, 4            4, 8,12
 5, 6, 7, 8   =====>   3, 7,11
 9,10,11,12            2, 6,10
                       1, 5, 9

  step 1: create N X M matrix and fill all values with 0

  step 2. start copying all values from first column and last row
*/
function rotateRectMatrixByAnti90(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let newMatrix = new Array(n).fill(0).map(_ => new Array(m).fill(0));

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            newMatrix[n - j - 1][i] = matrix[i][j];
        }
    }
    return newMatrix;
}

/*
* Rotate rectengular matrix by 180 degree
 1, 2, 3, 4            12,11,10, 9
 5, 6, 7, 8   =====>    8, 7, 6, 5
 9,10,11,12             4, 3, 2, 1
 step 1: reverse matrix columns

 step 2: reverse matrix rows
*/

function rotateRectMatrixBy180(matrix) {
    reverseColmuns(matrix);
    reverseRows(matrix);
    return matrix;
}

console.log(rotateRectMatrixBy180([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
//console.log(rotateRectMatrixByAnti90([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// console.log(rotateRecMatrixBy90([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// console.log(rotateMatrix180Degree([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));