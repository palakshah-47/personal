/*
* There are a total of N tasks, labeled from 0 to N-1. Some tasks may have prerequisites, for example to do task 0 you have to first complete task 1, which is expressed as a pair: [0, 1]
Given the total number of tasks N and a list of prerequisite pairs P, find if it is possible to finish all tasks.
Input: 
N = 4, P = 3
prerequisites = {{1,0},{2,1},{3,2}}
Output:
Yes
Explanation:
To do task 1 you should have completed
task 0, and to do task 2 you should 
have finished task 1, and to do task 3 you 
should have finished task 2. So it is possible.
*/

function isPossible(prerequisites, n, p) {
    let map = new Map();
    let queue = [], indegree = new Array(n).fill(0), resArr = [];

    //fill the map and indegree for all the prerequesites
    for (let [a, b] of prerequisites) {
        map.has(b) ? map.get(b).push(a) : map.set(b, [a]);
        indegree[a]++;
    }

    //check for 0 indegree and put the val in queue
    indegree.forEach((n, i) => {
        if (n === 0) queue.unshift(n);
    });

    //pop the element from que and check for indegree for its sibling after redcuing its indegree and push back to queue
    while (queue.length) {
        let task = queue.pop();
        if (map.has(task)) {
            let siblings = map.get(task);
            for (let sibling of siblings) {
                if (--indegree[sibling] === 0) queue.unshift(sibling);
            }
        }
        resArr.push(task);
    }

    return resArr.length === n ? 'Yes' : 'No';
}
console.log(isPossible([[1, 0], [2, 1], [3, 2]], 4, 3));