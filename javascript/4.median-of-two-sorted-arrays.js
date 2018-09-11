/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (23.82%)
 * Total Accepted:    299K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function sort(a,b){
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else {
        return 0
    }
} 
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const nums = nums1.concat(nums2).sort(sort);
    const isOdd = totalLength%2 === 0?false:true;
    const mid = Math.floor(totalLength/2)+1;
    if(isOdd){
        return nums[mid-1]
    }else {
        return (nums[mid-2]+nums[mid-1])/2
    }
};