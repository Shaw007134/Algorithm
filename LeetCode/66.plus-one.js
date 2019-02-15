/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.56%)
 * Total Accepted:    346.1K
 * Total Submissions: 853K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  add(digits, 0, digits.length - 1);
  function add(arr, l, r) {
    if (l === r && arr[l] === 9) {
      arr[l] = 0;
      for (var i = arr.length; i > l; i--) {
        arr[i] = arr[i - 1];
      }
      arr[l] = 1;
    } else {
      if (arr[r] + 1 <= 9) {
        arr[r] = arr[r] + 1;
      } else {
        arr[r] = 0;
        if (l <= r - 1) add(arr, l, r - 1);
      }
    }
  }
  return digits;
};

var digits = [8, 9, 9, 9];
plusOne(digits);
console.log(digits);
