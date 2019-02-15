/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (58.70%)
 * Total Accepted:    409.5K
 * Total Submissions: 697.1K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,1]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == null) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }
  for (var key in obj) {
    if (obj[key] === 1) return key;
  }
};
var test = [2];
console.log(singleNumber(test));
