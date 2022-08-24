/*
* Given two arrays start[] and end[] consisting of positive integers denoting 
the starting and ending points of a segment respectively, the task is to find the minimum number of 
integers which lies in at least.
*/

function minPoints(points) {
    points.sort((a, b) => a[1] - b[1]);

    let coordinates = [];
    let i = 0;
    let n = points.length;
    while (i < n) {
        let seg = points[i][1];
        coordinates.push(seg);
        let p = i + 1;
        if (p >= n) break;
        let arrived = points[p][0];

        while (seg >= arrived) {
            p += 1;
            if (p >= n) {
                break;
            }
            arrived = points[p][1];
        }
        i = p;
    }

    return coordinates;
}

console.log(minPoints([[4, 7], [1, 3], [2, 5], [5, 6]]));