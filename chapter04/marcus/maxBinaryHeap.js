// Question related to heap -> advance (bianry heap)
// Basic operations of binary heap -> 1. Push 2. Peek (retrieve the first element) 3. Poll (retrive and remove the first element)
// Optional operations of binary heap -> 1. isEmpty 2. Size 3. Merge
// Usually implement with priority queue
// Indexes (
//  1. parents => Math.floor(i-1)/2 ;
//  2. sibling => i + 1;
//  3. left-child => i * 2 + 1;
//  4. right-child: i * 2 + 2 ;
// Time complexity
//  1. Push || Poll O(log(n))
//  2. Peek O(1)
//  3. Search O(n)

class MaxBinaryHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  // swap two index nodes
  swap(i1, i2) {
    const tempt = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = tempt;
  }

  push(key) {
    this.data[this.data.length] = key;
    this.heapBubbleUp();
  }

  heapBubbleUp() {
    let currentIndex = this.data.length - 1;
    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  poll() {
    const result = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length = this.data.length - 1;
    this.heapBubbleDown();
    return result;
  }

  heapBubbleDown() {
    // compare with its children, and swap with the smallest one
    let currentIndex = 0;
    while (this.data[currentIndex] !== undefined) {
      let biggerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[biggerChildIndex]
      ) {
        biggerChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggerChildIndex]) {
        this.swap(currentIndex, biggerChildIndex);
      } else {
        return;
      }
    }
  }
}

const getRankOfNumberX = (heap, x) => {
  const stack = [];
  let rank = 1;
  let value;
  while (!heap.isEmpty()) {
    value = heap.poll();
    if (value === x && heap.peek() !== x) {
      heap.push(value);
      while (stack.length > 0) {
        heap.push(stack.pop());
      }
      return rank;
    } else {
      rank++;
      stack.push(value);
    }
  }
  while (stack.length > 0) {
    heap.insert(stack.pop());
  }
  return -1;
}

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var binaryHeap = new MaxBinaryHeap();
binaryHeap.push(25);
binaryHeap.push(5);
binaryHeap.push(40);
binaryHeap.push(40);
binaryHeap.push(70);
binaryHeap.push(70);
binaryHeap.push(90);
binaryHeap.push(44);
console.log(binaryHeap.data.join(','));

console.log(getRankOfNumberX(binaryHeap, 44));


let a = [];
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
a.push(binaryHeap.poll());
console.log('Top 5 item: ', a);

