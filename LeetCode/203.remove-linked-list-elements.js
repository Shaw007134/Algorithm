/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.12%)
 * Total Accepted:    204.4K
 * Total Submissions: 581.3K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 *
 *
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head == null) return null;
  var dummyHead = new ListNode();
  dummyHead.next = head;
  var cur = dummyHead;
  var temp = cur.next;

  while (temp != null) {
    if (temp != null && temp.val === val) {
      cur.next = temp.next;
    } else {
      cur = temp;
    }
    temp = temp.next;
  }
  return dummyHead.next;
};
