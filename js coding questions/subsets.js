/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

function subsets(nums) {
	let result = [];

	function helper(curr, index) {
		console.log(curr);
		result.push(curr);

		for (let i = index; i < nums.length; i++) {
			helper([...curr, nums[i]], i + 1);
		}
	}

	helper([], 0);
	return result;
}

console.log(subsets([1, 2, 3]));
