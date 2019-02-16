/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.72%)
 * Total Accepted:    205.1K
 * Total Submissions: 404.3K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 *
 * For example:
 *
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 *
 * Example 1:
 *
 *
 * Input: "A"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: "AB"
 * Output: 28
 *
 *
 * Example 3:
 *
 *
 * Input: "ZY"
 * Output: 701
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var obj = {};
  for (var i = 1; i <= 26; i++) {
    var char = String.fromCharCode(i + 64);
    obj[char] = i;
  }

  var len = s.length;
  var cur = len - 1;
  var ret = 0;
  while (cur >= 0) {
    ret += obj[s[cur]] * Math.pow(26, len - 1 - cur);
    cur--;
  }
  console.log(ret);
  return ret;
};
titleToNumber("Z");
