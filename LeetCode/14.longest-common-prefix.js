/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.89%)
 * Total Accepted:    399.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var str = strs[0];
  var com = "";

  if (strs.length === 0) return com;
  if (strs.length === 1) return str;

  if (str.length === 0) {
    return "";
  }
  for (var i = 0; i < str.length; i++) {
    var j;
    for (j = 1; j < strs.length; j++) {
      if (strs[j].length === 0) return "";
      if (strs[j][i] !== str[i]) return com;
    }
    if (j === strs.length) {
      com += str[i];
    }
  }
  return com;
};

console.log(longestCommonPrefix(["abab", "aba", ""]));
