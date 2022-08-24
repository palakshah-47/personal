/*
* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let x = nums1.length;
    let y = nums2.length;    
    let low = 0, high = x;
    while(low <= high){
        let pivotx = Math.floor((low+high)/2);
        let pivoty = Math.floor((x+y+1)/2) - pivotx;
        
        let maxX = pivotx === 0 ? -Infinity : nums1[pivotx-1];
        let minX = pivotx === nums1.length ? Infinity : nums1[pivotx];
        let maxY = pivoty === 0 ? -Infinity : nums2[pivoty-1];
        let minY = pivoty === nums2.length ? Infinity: nums2[pivoty];
        
        if(maxX <= minY && maxY <= minX){
             let lowMax = Math.max(maxX, maxY);
            if((x+y) % 2 === 1){              
               return lowMax;
            } else{
                let highMin = (lowMax + Math.min(minX, minY))/2;
                return highMin;
            }
        } else if(maxX < minY){
            low = pivotx + 1;
        } else{
            high = pivotx - 1;
        }
    }
};

console.log(findMedianSortedArrays([4,5,6,8,9], []));