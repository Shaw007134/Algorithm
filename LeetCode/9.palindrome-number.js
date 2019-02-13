/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (41.59%)
 * Total Accepted:    498.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   var temp = x
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   return temp === x.toString();
// };

var isPalindrome = function(x) {
  var arr = [];
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  while (x > 0) {
    var a = x % 10;
    arr.push(a);
    x = parseInt(x / 10);
  }

  for (var i = 0; 2 * i <= arr.length - 1; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// var isPalindrome = function (x) {
//   var arr1 = [];
//   var arr2 = [];
//   if (x === 0) return true;
//   if (x < 0 || x % 10 === 0) return false;
//   while (x > 0) {
//     var a = x % 10;
//     arr1.unshift(a);
//     arr2.push(a);
//     x = parseInt(x / 10);
//   }

//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1.shift() !== arr2.shift()) {
//       return false;
//     }
//   }
//   return true;
// };
