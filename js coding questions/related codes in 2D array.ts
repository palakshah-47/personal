/*
Given a two-dimensional list of disease codes (ICD codes), 
for example 
[[“icd_2”, “icd_3”], [“icd_3”, “icd_4”, “icd_2”], [“icd_5”]] 
represents that icd_3 relates to icd_2, icd_4 relates to icd_3 and icd_2, etc.

Given such a two-dimensional array, create a function that returns a Map which stores a new key-value pair for each unique ICD code:

The key being the ICD code
The value representing the amount of times an ICD code is associated with a unique code

NOTE: ordering is not required

Input: [
	["icd_2", "icd_3"],
	["icd_3", "icd_4", "icd_2"],
	["icd_5"],
]

Output: [
	["icd_2", 2]
	["icd_3", 2]
	["icd_4", 2]
	["icd_5", 0]
]

*/

function findRelatedCodes(icdCodeList: string[][]) {
  let obj: { [key: string]: Set<string> } = {};

  for (let i = 0; i < icdCodeList.length; i++) {
    let arr: string[] = icdCodeList[i];
    for (let j = 0; j < arr.length; j++) {
      let icdCode = arr[j];
      if (!obj[icdCode]) obj[icdCode] = new Set();

      for (let k = 0; k < arr.length; k++) {
        let relativeIcdCode = arr[k];
        if (icdCode != relativeIcdCode && !obj[icdCode].has(relativeIcdCode)) {
          obj[icdCode].add(relativeIcdCode);
        }
      }
    }
  }

  let result: [string, number][] = [];
  for (let key in obj) {
    result.push([key, obj[key].size]);
  }
  return result;
}

console.log(
  findRelatedCodes([['icd_2', 'icd_3'], ['icd_3', 'icd_4', 'icd_2'], ['icd_5']])
); // [["icd_2", 2], ["icd_3", 2], ["icd_4", 2], ["icd_5", 0]]
