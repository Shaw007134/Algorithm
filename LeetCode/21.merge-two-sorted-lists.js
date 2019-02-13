/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.48%)
 * Total Accepted:    497.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function Generator(a) {
  var dummyhead = new ListNode();
  var cur = dummyhead;
  if (a == null) return dummyhead.next;
  for (var i = 0; i < a.length; i++) {
    var node = new ListNode(a[i]);
    cur.next = node;
    cur = cur.next;
  }
  return dummyhead.next;
}

var mergeTwoLists = function(l1, l2) {
  // var l1 = Generator(l1);
  // var l2 = Generator(l2);
  var retNode = new ListNode();
  var temp = retNode;
  var min;
  var node;
  if (l1 == null && l2 == null) return retNode.next;
  while (l1 != null && l2 !== null) {
    if (l2.val < l1.val) {
      min = l2.val;
      l2 = l2.next;
    } else {
      min = l1.val;
      l1 = l1.next;
    }

    node = new ListNode(min);
    temp.next = node;
    temp = temp.next;
  }

  if (l1 === null && l2 !== null) {
    node = new ListNode(l2.val);
    temp.next = node;
    node.next = l2.next;
    return retNode.next;
  }

  if (l2 === null && l1 !== null) {
    node = new ListNode(l1.val);
    temp.next = node;
    node.next = l1.next;
    return retNode.next;
  }

  return retNode.next;
};

// var test = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// console.log(test);
