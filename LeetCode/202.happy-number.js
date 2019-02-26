/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (44.11%)
 * Total Accepted:    210.4K
 * Total Submissions: 476.6K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 *
 * Example:
 *
 *
 * Input: 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n <= 0) return false;
  var temp;
  var ret = false;
  var count = 0;
  while (!ret) {
    var sum = 0;
    console.log(n);
    count++;
    temp = n.toString().split("");
    while (temp.length > 0) {
      var cur = temp.pop();
      sum += cur * cur;
    }
    if (sum === 1) ret = true;
    else {
      n = sum;
      if (count > 1000) break;
    }
  }
  console.log(ret);
  return ret;
};

isHappy(19);
