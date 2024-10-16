// Complexity Analysis

// Time complexity : O(N\log k)O(Nlogk) where \text{k}k is the number of linked lists.

// The comparison cost will be reduced to O(\log k)O(logk) for every pop and insertion to priority queue. But finding the node with the smallest value just costs O(1)O(1) time.
// There are NN nodes in the final linked list.
// Space complexity :

// O(n)O(n) Creating a new linked list costs O(n)O(n) space.
// O(k)O(k) The code above present applies in-place method which cost O(1)O(1) space. And the priority queue (often implemented with heaps) costs O(k)O(k) space (it's far less than NN in most situations).


class minBinaryHeap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || ((parent, child) => parent - child);
  }

  getParentIndex(index){
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index){
    return index * 2 + 1;
  }
  getRightChildIndex(index){
    return index * 2 + 2;
  }


  // O(log(n))
  poll(val) {
    let result = this.peek();
    if (this.isEmpty() || this.getSize() === 0) {
      return result;
    }
    let lastElement = this.data[this.getSize() - 1];
    this.data[0] = lastElement;
    this.data.length--;
    this.bubbleDown();
    return result
  }
  // O(log(n))
  push(val) {
    this.data[this.getSize()] = val;
    this.bubbleUp();
  }
  // O(1)
  peek() {
    return this.data[0];
  }
  // O(1)
  isEmpty() {
    return this.data.length === 0;
  }
  // O(1)
  getSize() {
    return this.data.length;
  }
  // O(log(n))
  bubbleUp() {
    let currentIdx = this.getSize() - 1;
    if (this.getParentIndex(currentIdx) < 0) return;
    while(this.comparator(this.data[currentIdx], this.data[this.getParentIndex(currentIdx)]) < 0) {
      this.swap(currentIdx, this.getParentIndex(currentIdx));
      currentIdx = this.getParentIndex(currentIdx);
    }
  }
  // O(log(n))
  bubbleDown() {
    let currentIdx = 0;
    while (this.data[currentIdx] !== undefined) {
      let smallestChildIdx = this.getLeftChildIndex(currentIdx);
      if (
        this.data[this.getRightChildIndex(currentIdx)] !== undefined &&
        this.comparator(this.data[this.getRightChildIndex(currentIdx)], this.data[smallestChildIdx]) < 0
      ) {
        smallestChildIdx = this.getRightChildIndex(currentIdx);
      }
      if (this.data[smallestChildIdx] === undefined) return
      if (this.comparator(this.data[currentIdx], this.data[smallestChildIdx]) > 0) {
        this.swap(currentIdx, smallestChildIdx);
      }
      currentIdx = smallestChildIdx;
    }
  }
  // O(log(n))
  swap(idx1, idx2) {
    let tempt = this.data[idx1];
    this.data[idx1] = this.data[idx2];
    this.data[idx2] = tempt;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let minHeap = new minBinaryHeap((parent, child) => {
        if (parent === undefined || child === undefined) return false
        return parent.val - child.val
    });
    for (let head of lists) {
        if (head) {
          minHeap.push(head);
        }
    }
    const dummy = new ListNode();
    let tail = dummy;
    while (minHeap.getSize()) {
        let {val, next} = minHeap.poll();
        tail.next = new ListNode(val);
        tail = tail.next;
        if (next !== null) {
            minHeap.push(next);
        }
    }
    return dummy.next;
};