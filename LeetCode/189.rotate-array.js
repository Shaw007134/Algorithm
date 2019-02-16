/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (28.66%)
 * Total Accepted:    261.5K
 * Total Submissions: 910.9K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an array, rotate the array to the right by k steps, where k is
 * non-negative.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 *
 * Example 2:
 *
 *
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 *
 *
 * Note:
 *
 *
 * Try to come up as many solutions as you can, there are at least 3 different
 * ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   while (k > nums.length) {
//     k = k - nums.length;
//   }
//   var i = nums.length - k;
//   var j = i;
//   var temp = [];
//   while (i < nums.length) {
//     temp.push(nums[i++]);
//   }
//   var len = nums.length - 1;
//   while (j > 0) {
//     nums[len--] = nums[--j];
//   }
//   for (var i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
//   }
//   console.log(temp);
// };

var rotate = function(nums, k) {
  while (k > nums.length) {
    k = k - nums.length;
  }
  while (k > 0) {
    var len = nums.length - 1;
    var temp = nums[len];
    for (var i = len; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
};

var rotate = function(nums, k) {
  while (k > nums.length) {
    k = k - nums.length;
  }
  while (k > 0) {
    var temp = nums.pop();
    nums.unshift(temp);
    k--;
  }
};

var test = [1, 2, 3, 4, 5, 6, 7];
rotate(test, 3);
console.log(test);
