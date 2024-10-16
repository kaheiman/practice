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

binaryHeap = new minBinaryHeap();
binaryHeap.push(25);
binaryHeap.push(5);
binaryHeap.push(40);
binaryHeap.push(40);
binaryHeap.push(70);
binaryHeap.push(70);
binaryHeap.push(90);
binaryHeap.push(44);
console.log(binaryHeap.data.join(','));

let a = [];
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
console.log("Top 5 item: ", a);

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  nums.forEach((n) => this.add(n));
};

/**
 * @param {number} val
 * @return {number}
 */
// 1, 2, 3, 4, 5, 6
KthLargest.prototype.add = function (val) {
  // always keeps kth terms from right hand size
  if (this.heap.size() < k) {
    this.heap.push(val);
  } else if (this.heap.peek() < val) {
    this.heap.push(val);
    this.heap.poll();
  };
  return this.heap.peek();
};