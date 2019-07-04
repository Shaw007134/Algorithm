/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (52.27%)
 * Total Accepted:    514K
 * Total Submissions: 976.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 *
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * @param {ListNode} head
 * @return {ListNode}
 */

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

var reverseList = function(head) {
  if (head == null || head.next === null) return head;
  var res = new ListNode();
  while (head.next !== null) {
    var temp = new ListNode();
    temp.val = head.val;
    temp.next = res.next;
    res.next = temp;
    head = head.next;
  }
  res.val = head.val;
  return res;
};
