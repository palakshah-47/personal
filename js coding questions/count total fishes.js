/*
Given array of fishes and baits, count how many fishes bait can take out. 
A bait's size must be less than fish size and it can be used 3 times before using another one.
const fishArray = [1, 2, 3, 4, 5, 6, 3, 4, 5];
const baitArray = [1, 2];
output = 6
*/

function countFishBait(fishArray, baitArray) {
  let count = 0;
  let baitIndex = 0;
  let baitUses = 0;
  for (let i = 0; i < fishArray.length; i++) {
    if (fishArray[i] > baitArray[baitIndex]) {
      count++;
      baitUses++;

      if (baitUses === 3) {
        baitIndex++;
        baitUses = 0;

        if (baitIndex >= baitArray.length) break;
      }
    }
  }
  return count;
}

console.log(countFishBait([1, 2, 3, 4, 5, 6, 3, 4, 5], [1, 2]));
