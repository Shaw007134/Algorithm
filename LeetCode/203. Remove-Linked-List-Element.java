class Solution {
  public ListNode removeElements(ListNode head, int val) {
    while (head != null && head.val == val) {
      // ListNode delNode = head;
      // head = head.next;
      // delNode.next = null;
      head = head.next;
    }

    if (head == null) {
      return null;
    }

    ListNode prev = head;
    while (prev.next != null) {
      if (prev.next.val == val) {
        prev.next = prev.next.next;
        // ListNode delNode = prev.next;
        // prev.next = delNode.next;
        // delNode.next = null;
      } else
        prev = prev.next;
    }
    return head;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 2, 6, 3, 4, 5, 6 };
    ListNode head = new ListNode(nums);
    System.out.println(head);

    ListNode res = (new Solution()).removeElements(head, 6);
    System.out.println(res);

  }
}

// class Solution {
// public ListNode removeElements(ListNode head, int val) {

// ListNode dummyHead = new ListNode(-1);
// dummyHead.next = head;

// ListNode prev = dummyHead;

// while (prev.next != null) {
// if (prev.next.val == val) {
// prev.next = prev.next.next;
// } else
// prev = prev.next;
// }
// return dummyHead.next;
// }
// }

// class Solution3 {
// public ListNode removeElements(ListNode head, int val){
// if(head == null)
// return null;

// head.next = removeElements(head.next, val);
// return head.val == val ? head.next : head;
// }
// }
// }