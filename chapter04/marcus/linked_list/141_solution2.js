// fast slow pointer
var hasCycle = function(head) {
  let fast = head, slow = head

  while(fast && slow) {
    if (!fast || !fast.next) return false

    if (fast.next == slow) return true

    fast = fast.next.next
    slow = slow.next
  }

  return false
};