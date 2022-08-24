// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]

var findOrder = function(numCourses, prerequisites) {
    const finishedCourse  = []
    const map = new Map()
    const queue = []
    const indegree = new Array(numCourses).fill(0)
    
    // build up map and indegree
    for (const [a, b] of prerequisites) {
        map.has(b) ? map.get(b).push(a) : map.set(b, [a])
        indegree[a]++
    }
    
    // build up queue with starting course
    indegree.forEach((n, i) => {
        if (n === 0) queue.unshift(i)
    })
    
    // bfs queue and fill finishedCoures
    while (queue.length > 0) {
        const course = queue.pop()
        if (map.has(course)) {
            map.get(course).forEach(c => {
                if (--indegree[c] === 0) queue.unshift(c)
            })
        }
        finishedCourse.push(course)
    }
    
    return finishedCourse.length === numCourses ? finishedCourse : []
}

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));