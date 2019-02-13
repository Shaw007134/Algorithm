/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.28%)
 * Total Accepted:    254.1K
 * Total Submissions: 646.7K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 6.     2111211211
 * 7.     1211211211112121
 *
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
  return strTostr(n);
  function strTostr(n) {
    var ret = "";
    if (n === 1) ret = "1";

    if (n > 1) {
      var arr = strTostr(n - 1).split("");
      var i = 0;
      while (i < arr.length) {
        var j = 1;
        while (i + 1 < arr.length && arr[i + 1] === arr[i]) {
          j++;
          arr.shift();
        }
        ret += j.toString() + arr.shift();
      }
      n--;
    }
    return ret;
  }
};

countAndSay(8);
