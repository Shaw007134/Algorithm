/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.24%)
 * Total Accepted:    343K
 * Total Submissions: 668.9K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var obj = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (obj[nums[i]] == null) {
      obj[[nums[i]]] = 1;
    } else {
      obj[[nums[i]]] += 1;
    }
  }
  for (var key in obj) {
    if (obj[key] > parseInt(len / 2)) return key;
  }
};
var test = [3, 2, 3];
console.log(majorityElement(test));
