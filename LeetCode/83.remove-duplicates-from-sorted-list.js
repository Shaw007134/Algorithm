/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (41.76%)
 * Total Accepted:    297.3K
 * Total Submissions: 711.7K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 *
 * Example 1:
 *
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var dummyHead = new ListNode();
  dummyHead.next = head;
  var cur = dummyHead;
  while (cur != null) {
    var pre = cur;
    if (cur.next !== null && cur.next.val !== cur.val) {
      cur = cur.next;
      pre = cur;
    } else {
      if (cur.next === null) return head;
      else {
        while (cur.next !== null && cur.next.val === cur.val) {
          cur = cur.next;
        }
        if (cur.next === null) {
          pre.next = cur.next;
          return head;
        } else {
          pre.next = cur.next;
          cur = cur.next;
        }
      }
    }
  }
};
