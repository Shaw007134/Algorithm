/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.66%)
 * Total Accepted:    271.1K
 * Total Submissions: 719.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 *
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 *
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length > b.length) {
    var temp = b;
    b = a;
    a = temp;
  }
  var len = a.length;
  var ret = "";
  var flag = "0";

  for (var i = len - 1; i >= 0; i--) {
    if (a[i] !== b[i + b.length - a.length]) {
      if (flag === "1") {
        ret = "0" + ret;
      } else {
        ret = "1" + ret;
        console.log(ret);
      }
    } else {
      if (a[i] === "0") {
        if (flag === "1") {
          ret = "1" + ret;
          flag = "0";
        } else {
          ret = "0" + ret;
        }
      } else {
        if (flag === "1") {
          ret = "1" + ret;
        } else {
          ret = "0" + ret;
          flag = "1";
        }
      }
    }
  }

  var j;
  for (j = b.length - a.length - 1; j >= 0; j--) {
    if (flag === "0") {
      ret = b[j] + ret;
    } else {
      if (b[j] === "0") {
        ret = "1" + ret;
        flag = "0";
      } else {
        ret = "0" + ret;
        flag = "1";
      }
    }
  }

  if (flag === "1") {
    ret = "1" + ret;
  }
  console.log(ret);
  return ret;
};

addBinary("100", "110010");
