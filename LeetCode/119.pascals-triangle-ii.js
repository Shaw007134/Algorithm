/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (41.69%)
 * Total Accepted:    181.6K
 * Total Submissions: 435.3K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 3
 * Output: [1,3,3,1]
 *
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // if (rowIndex === 0) return [];
  if (rowIndex === 0) return [1];
  var ret = [];
  function pascals(n) {
    if (n === 1) {
      return [1];
    }
    if (ret[n - 1] == null) ret[n - 1] = pascals(n - 1);
    var prev = ret[n - 1];
    var cur = [];
    cur.push(1);
    for (var i = 1; i < n - 1; i++) {
      var val = prev[i - 1] + prev[i];
      cur.push(val);
    }
    cur.push(1);
    ret[n] = cur;
    return cur;
  }
  return pascals(rowIndex + 1);
};

console.log(getRow(3));
