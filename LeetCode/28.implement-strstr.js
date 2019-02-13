/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.08%)
 * Total Accepted:    374.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Example 1:
 *
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  if (haystack.length < needle.length) return -1;
  for (var i = 0; i <= haystack.length - needle.length; i++) {
    var j = i;
    if (haystack[i] === needle[0]) {
      while (j - i < needle.length) {
        if (haystack[j] === needle[j - i]) {
          j++;
        } else {
          break;
        }
      }
      if (j - i === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

var str = "aaaaa";
var index = strStr(str, "baa");
console.log(index);
