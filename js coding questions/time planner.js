/*
nput:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12

Time Planner
A naive solution would loop through both input arrays and check the intersection of every possible pair slots to find an overlap of at least dur seconds. This isn’t an efficient solution and its time complexity is O(N⋅M). We can do better than that.

Since the arrays are sorted by the slots’ start times, we can iterate over both arrays in a single loop. We use two indices, one for each array, while incrementing one index at a time according the following rules: If there is a minimal overlap of dur between two given times slots, return the pair [start, start + dur], where start is the start time of said overlap. Otherwise, increment the index of the array with the earlier time slot.

Pseudocode:

function meetingPlanner(slotsA, slotsB, dur):
    ia = 0
    ib = 0

    while (ia < slotsA.length AND ib < slotsB.length):
        start = max(slotsA[ia][0], slotsB[ib][0])
        end = min(slotsA[ia][1], slotsB[ib][1])

        if (start + dur <= end):
            return [start, start + dur]

        if (slotsA[ia][1] < slotsB[ib][1]):
            ia++
        else:
            ib++

    return []
Time Complexity: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.

Space Complexity: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.
*/

function meetingPlanner(slotsA, slotsB, dur) {
    if (slotsB.length > slotsA.length) return meetingPlanner(slotsB, slotsA, dur);
    let m = slotsA.length, n = slotsB.length;
  
    let i = 0, j = 0;
    while (i < m && j < n) {
        let start = Math.max(slotsA[i][0], slotsB[j][0]);
        let end = Math.min(slotsA[i][1], slotsB[j][1]);
    
        if (start + dur <= end) return [start, start + dur];
    
        if (slotsA[i][1] < slotsB[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return [];
}

console.log(meetingPlanner([[1, 10]], [[2, 3], [5, 7]], 2));