/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (34.64%)
 * Total Accepted:    323K
 * Total Submissions: 932K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 *
 *
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 *
 *
 * Example:
 *
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var h = 0;
  for (var i = 0; i < n; i++) {
    var j = h;

    while (j < m) {
      if (nums1[j] <= nums2[i]) {
        j++;
      } else {
        for (var k = m; k > j; k--) {
          nums1[k] = nums1[k - 1];
        }
        nums1[j] = nums2[i];
        break;
      }
    }
    if (j === m) {
      nums1[j] = nums2[i];
    }
    m++;
    h = j;
  }
};

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var n = 3;
var m = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
