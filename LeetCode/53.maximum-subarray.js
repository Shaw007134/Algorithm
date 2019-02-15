/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.57%)
 * Total Accepted:    453K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  var l, r;
  var i = 0;
  var sum = nums[0];
  while (i < nums.length) {
    var temp = 0;
    // if (sum < nums[i] && nums[i] < 0) {
    //   sum = nums[i];
    //   l = i;
    //   r = i;
    //   i++;
    // } else {

    for (var j = i; j < nums.length; j++) {
      temp += nums[j];
      if (temp > sum) {
        sum = temp;
        l = i;
        r = j;
      }
    }
    i++;
  }

  console.log(sum);
  console.log("l " + l + " r " + r);
  return sum;
};

var test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var test1 = [-2, -1, -2];
var test2 = [1, 2];
var test3 = [-1, 1, 2, 1];
var test4 = [-2, -1];
maxSubArray(test4);
