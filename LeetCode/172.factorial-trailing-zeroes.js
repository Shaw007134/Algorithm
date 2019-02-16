/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.21%)
 * Total Accepted:    145.5K
 * Total Submissions: 390.8K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Example 1:
 *
 *
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 *
 * Example 2:
 *
 *
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 *
 * Note: Your solution should be in logarithmic time complexity.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (n < 5) return 0;
  if (n < 10) return 1;

  var five = 0;
  for (var temp1 = n - (n % 5); temp1 / 5 > 0; temp1 -= 5) {
    var temp = temp1;
    while (temp % 5 === 0) {
      five++;
      temp = temp / 5;
    }
  }
  return five;
};

console.log(trailingZeroes(20));
