/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (29.99%)
 * Total Accepted:    315.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) return true;
  s = s.trim().toLowerCase();
  var temp = [];
  for (var i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) ||
      (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)
    ) {
      temp.push(s[i]);
    }
  }
  var str = temp.join("");
  var temp1 = [];
  for (var i = 0; i < str.length; i++) {
    temp1.push(temp.pop());
  }
  var str1 = temp1.join("");
  console.log(str);
  console.log(str1);
  return str1 === str;
};

var test1 = "A man, a plan, a canal: Panama";
var test = "0P";
console.log("9".charCodeAt());
console.log(isPalindrome(test));
