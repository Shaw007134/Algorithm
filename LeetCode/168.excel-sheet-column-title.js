/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.43%)
 * Total Accepted:    162.1K
 * Total Submissions: 569.9K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 *
 * For example:
 *
 *
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB
 * ⁠   ...
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "A"
 *
 *
 * Example 2:
 *
 *
 * Input: 28
 * Output: "AB"
 *
 *
 * Example 3:
 *
 *
 * Input: 701
 * Output: "ZY"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var obj = {};
  for (var i = 1; i <= 26; i++) {
    obj[i] = String.fromCharCode(i + 64);
  }
  obj[0] = "Z";
  var ret = [];
  if (n <= 26) return obj[n];
  while (n > 26) {
    var res = n % 26;
    ret.push(obj[res]);
    n = parseInt((n - 1) / 26);
  }
  ret.push(obj[n]);
  return ret.reverse().join("");
};

console.log(convertToTitle(26*2));
