/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.37%)
 * Total Accepted:    354.7K
 * Total Submissions: 878.5K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 *
 * Example 4:
 *
 *
 * Input: [1,3,5,6], 0
 * Output: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) {
    nums[0] = target;
    return 0;
  }

  var l = 0;
  var r = nums.length - 1;
  var mid;
  for (var i = l; i <= r; i++) {
    console.log("l " + l + " r " + r);
    mid = parseInt((l + r) / 2);
    if (nums[mid] === target) {
      // for(var j = nums.length; j > mid + 1; j--){
      //   nums[j] = nums[j - 1]
      // }
      // nums[mid+1] = target;
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
    console.log("mid " + mid);
    if (l > r) break;
  }
  if (nums[l] < target) return l + 1;
  return l;
};

// var nums = [1, 3, 5, 6];
var nums = [1, 3, 7, 8, 10];
var index = searchInsert(nums, 15);
console.log(index);
