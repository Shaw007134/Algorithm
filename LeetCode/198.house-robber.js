/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.73%)
 * Total Accepted:    285K
 * Total Submissions: 699.7K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 *
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  var max = 0;
  var temp = [];
  max = restMax(nums, 0, nums.length);

  function restMax(arr, l, r) {
    if (l > r) return 0;
    var cur = 0;
    if (l === r) {
      cur = arr[l];
      return cur;
    }
    if (r === l + 1) {
      cur = Math.max(arr[l], arr[r]);
      return cur;
    }

    if (temp[r - 1] == null) {
      temp[r - 1] = restMax(arr, l, r - 1);
    }
    if (r - 2 >= 0 && temp[r - 2] == null) {
      temp[r - 2] = restMax(arr, l, r - 2);
    }
    var prev = temp[r - 1];
    var prev1 = temp[r - 2];
    console.log("l " + l + " r " + r);
    console.log("r-1: " + prev + " r-2: " + prev1);
    // if (prev1 !== 0) {
    if (prev1 + arr[r] > prev) {
      cur = prev1 + arr[r];
    } else {
      cur = prev;
    }
    // } else {
    //   cur = prev;
    // }
    return cur;
  }
  console.log(max);
  console.log(temp);
  return max;
};

var test = [1, 2, 3, 1];
rob(test);
