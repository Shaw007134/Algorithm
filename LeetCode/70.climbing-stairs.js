/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.18%)
 * Total Accepted:    347.6K
 * Total Submissions: 804.9K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 *
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var arr = [];
  return climb(arr, n);
  function climb(arr, n) {
    if (n === 1) {
      arr[1] = 1;
      return 1;
    }
    if (n === 2) {
      arr[2] = 2;
      return 2;
    }
    if (!arr[n - 2]) {
      arr[n - 2] = climb(arr, n - 2);
    }
    if (!arr[n - 1]) {
      arr[n - 1] = climb(arr, n - 1);
    }

    return arr[n - 2] + arr[n - 1];
  }
};

console.log(climbStairs(43));
