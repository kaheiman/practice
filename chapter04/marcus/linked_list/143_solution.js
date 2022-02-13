/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  let arr = [];
  while(head) {
      let tempt = head;
      head = head.next;
      tempt.next = null;
      arr.push(tempt);
  }
  let [l, r] = [0, arr.length -1];
  while(l < r) {
      arr[l].next = arr[r];
      if (l + 1 < r) {
          arr[r].next = arr[l + 1];
      }
      l++;
      r--;
  }
  return head;
};