/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.38%)
 * Total Accepted:    206.2K
 * Total Submissions: 454.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 *
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 *
 * return its bottom-up level order traversal as:
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */

// var levelOrderBottom = function(root) {
//   var arr = [];
//   var ret = [];
//   if (root == null) return [];
//   if (root.left == null && root.right == null) return [[root.val]];
//   var l = levelOrderBottom(root.left);
//   var r = levelOrderBottom(root.right);
//   for (var i = 0; i < r.length; i++) {
//     if (r[i] != null) l.push(r[i]);
//   }
//   return [l, [root.val]];
// };

// var levelOrderBottom = function(root) {
//   var arr = [];
//   var ret = [];
//   if (root == null) return [];
//   if (root.left == null && root.right == null) return [[root.val]];

//   arr.push(root);
//   var temp = [];
//   var cur;
//   while (arr.length > 0) {
//     cur = arr.shift();
//     if (cur != null) {
//       temp.push(cur.val);
//       arr.push(cur.left);
//       arr.push(cur.right);
//     } else {
//       temp.push(cur);
//     }
//   }
//   var i = temp.length - 1;
//   while (i > 0) {
//     if (temp[i] == null) {
//       temp.pop();
//       i--;
//     } else {
//       break;
//     }
//   }
//   console.log(temp);
//   i = temp.length - 1;
//   while (i > 0) {
//     cur = [];
//     while (temp[i] != null) {
//       cur.push(temp[i]);
//       i++;
//     }
//     if (temp[i] == null) {
//       ret.push(cur);
//       i--;
//     }
//   }
//   ret.push([temp[0]]);
//   return ret;
//   // var len = Math.floor(Math.log2(temp.length)) + 1;
//   // while (len > 1) {
//   //   i = Math.pow(2, len - 1) - 1;
//   //   cur = [];
//   //   while (i < Math.pow(2, len) - 1) {
//   //     if (temp[i] != null) cur.push(temp[i]);
//   //     i++;
//   //   }
//   //   ret.push(cur);
//   //   len--;
//   // }
//   // ret.push([temp[0]]);
// };

var levelOrderBottom = function(root) {
  var depth = maxDepth(root);
  var ret = [];

  function maxDepth(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    var l = maxDepth(root.left);
    var r = maxDepth(root.right);
    return 1 + Math.max(l, r);
  }

  var i = 1;
  var queue = [];
  var queue2 = [];
  queue2.push(root);
  while (i <= depth) {
    var temp;
    var cur = [];
    temp = queue2;
    queue2 = queue;
    queue = temp;
    while (queue.length > 0) {
      temp = queue.shift();
      if (temp != null) {
        cur.push(temp.val);
        queue2.push(temp.left);
        queue2.push(temp.right);
      }
    }
    if (cur.length > 0) ret.unshift(cur);
    i++;
  }
  return ret;
};
