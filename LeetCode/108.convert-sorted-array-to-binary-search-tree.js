/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (48.91%)
 * Total Accepted:    234K
 * Total Submissions: 478.1K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 *
 * Example:
 *
 *
 * Given the sorted array: [-10,-3,0,5,9],
 *
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  var len = nums.length;
  var ret = balancedBST(nums, 0, len);
  function balancedBST(arr, l, r) {
    if (l > r) return null;

    var mid = parseInt((l + r) / 2);
    if (l > mid) return null;
    if (mid + 1 > r) return null;

    var node = new TreeNode(arr[mid]);
    var left = balancedBST(arr, l, mid);
    var right = balancedBST(arr, mid + 1, r);
    node.left = left;
    node.right = right;
    return node;
  }
  return ret;
};
