/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (49.28%)
 * Total Accepted:    344K
 * Total Submissions: 697.9K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 *
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 *
 * Example 1:
 *
 *
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * Output: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// function Generator(arr) {
//   var root = new TreeNode(arr[0]);
//   root.left = new TreeNode(arr[1]);
//   root.right = new TreeNode(arr[2]);
//   return root;
// }

var isSameTree = function(p, q) {
  if (p == null && q == null) return true;
  if (p == null && q != null) return false;
  if (q == null && p != null) return false;
  if (p.val !== q.val) return false;
  if (p.val === q.val) {
    var left = isSameTree(p.left, q.left);
    var right = isSameTree(p.right, q.right);
    return left && right;
  }
};
// var p = Generator([1, 2, 3]);
// var q = Generator([1, 2, 3]);
// console.log(isSameTree(p, q));
