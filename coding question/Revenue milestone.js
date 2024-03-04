/**
* Revenue Milestones
We keep track of the revenue Facebook makes every day, and we want to know on what days Facebook hits certain revenue milestones. Given an array of the revenue on each day, and an array of milestones Facebook wants to reach, return an array containing the days on which Facebook reached every milestone.
Signature
int[] getMilestoneDays(int[] revenues, int[] milestones)
Input
revenues is a length-N array representing how much revenue FB made on each day (from day 1 to day N). milestones is a length-K array of total revenue milestones.
Output
Return a length-K array where K_i is the day on which FB first had milestones[i] total revenue. If the milestone is never met, return -1.
Example
revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
milestones = [100, 200, 500]
output = [4, 6, 10]
Explanation
On days 4, 5, and 6, FB has total revenue of $100, $150, and $210 respectively. Day 6 is the first time that FB has >= $200 of total revenue.
*/

function getMilestoneDays(revenues, milestones) {
  let result = Array.from({ length: milestones.length }).fill(0);

  function search(arr, target) {
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (arr[mid] === target) return mid + 1;
      // else if (arr[mid] < target) left = mid + 1;
      // else right = mid - 1;
      if (arr[mid] >= target && mid === 0) return mid + 1;
      else if (arr[mid] >= target && arr[mid - 1] < target) return mid + 1;
      else if (target > arr[mid]) left = mid + 1;
      else right = mid;
    }
    return -1;
  }

  for (let i = 1; i < revenues.length; i++) {
    revenues[i] += revenues[i - 1];
  }

  for (let i = 0; i < milestones.length; i++) {
    result[i] = search(revenues, milestones[i]);
  }
  return result;
}

console.log(
  getMilestoneDays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 200, 500])
);
