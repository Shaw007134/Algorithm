/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.51%)
 * Total Accepted:    351K
 * Total Submissions: 825.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 *
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 * But the following [1,2,2,null,3,null,3]  is not:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true;
  if (root.left == null && root.right == null) return true;
  if (root.left == null && root.right != null) return false;
  if (root.right == null && root.left != null) return false;
  if (root.left.val !== root.right.val) return false;
  var l = new TreeNode(root.left.val);
  l.left = root.left.left;
  l.right = root.right.right;

  var r = new TreeNode(root.right.val);
  r.left = root.left.right;
  r.right = root.right.left;
  return isSymmetric(l) && isSymmetric(r);
};
