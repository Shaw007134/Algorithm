/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.18%)
 * Total Accepted:    223.6K
 * Total Submissions: 505.7K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
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
  pascals(numRows);
  ret.shift();
  console.log(ret);
  return ret;
};

generate(5);
