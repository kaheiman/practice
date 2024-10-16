/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  // fast slow pointer
  // slow.next -> fast.next
  // if fast.next is null,
  // prev slow next equal to the current slow next
  // remove the current slow
  // return head

  // otherwise fast = fast.next, slow = slow.next
  let slow = head;
  let fast = head;
  for (i=0; i < n; i++) {
       fast = fast.next;
  }
  while (fast) {
      if (fast.next === null) {
          slow.next = slow.next.next;
          return head;
      }
      fast = fast.next;
      slow = slow.next;
  }
  return slow.next;
};