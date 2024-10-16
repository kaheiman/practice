// minHeap
function defaultComparator(a, b) {
	return a < b;
}

// maxHeap
function defaultMaxHeapComparator(a, b) {
  return a > b;
}

class Heap {
	constructor(items, comparator) {
		this._items = items || [];
		this._size = this._items.length;
		this._comparator = comparator || defaultComparator;
		this._heapify();
	}

	/*
	 * @return {boolean}
	 */
	empty() {
		return this._size === 0;
	}

	/*
	 * @return {*}
	 */
	pop() {
		if (this._size === 0) {
			return;
		}

		const elt = this._items[0];

		const lastElt = this._items.pop();
		this._size--;

		if (this._size > 0) {
			this._items[0] = lastElt;
			this._sinkDown(0);
		}

		return elt;
	}

	/*
	 * @param {*} item
	 */
	push(item) {
		this._items[this._size++] = item;
		this._bubbleUp(this._size - 1);
	}

	/*
	 * @return {number}
	 */
	size() {
		return this._size;
	}

	/*
	 * @return {*}
	 */
	peek() {
		if (this._size === 0) {
			return;
		}

		return this._items[0];
	}

	_heapify() {
		for (let index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
			this._sinkDown(index);
		}
	}

	/*
	 * @parent {number} index
	 */
	_bubbleUp(index) {
		const elt = this._items[index];
		while (index > 0) {
			const parentIndex = Math.floor((index + 1) / 2) - 1;
			const parentElt = this._items[parentIndex];

			// if parentElt < elt, stop
			if (this._comparator(parentElt, elt)) {
				return;
			}

			// swap
			this._items[parentIndex] = elt;
			this._items[index] = parentElt;
			index = parentIndex;
		}
	}

	/*
	 * @parent {number} index
	 */
	_sinkDown(index) {
		const elt = this._items[index];

		while (true) {
			const leftChildIndex = 2 * (index + 1) - 1;
			const rightChildIndex = 2 * (index + 1);
			let swapIndex = -1;

			if (leftChildIndex < this._size) {
				const leftChild = this._items[leftChildIndex];
				if (this._comparator(leftChild, elt)) {
					swapIndex = leftChildIndex;
				}
			}

			if (rightChildIndex < this._size) {
				const rightChild = this._items[rightChildIndex];
				if (this._comparator(rightChild, elt)) {
					if (
						swapIndex === -1 ||
						this._comparator(rightChild, this._items[swapIndex])
					) {
						swapIndex = rightChildIndex;
					}
				}
			}

			// if we don't have a swap, stop
			if (swapIndex === -1) {
				return;
			}

			this._items[index] = this._items[swapIndex];
			this._items[swapIndex] = elt;
			index = swapIndex;
		}
	}
}


// for a brute force solution stay a sorted list while insert new element

// idea median is always the middle of a stream of numbers when there are odd number
// Otherwise its average of 2 half, the first half is the largest element of smaller part and
// second half is the smallest element of larger part
// To keep largest and smallest, heap is a proper data structure to do so


// [3, 1, 2, 4]

// Step 1
// minHeap = larger part []
// maxHeap = smaller part [3] // if max heap size 0, insert into max heap

// Step 2
// minHeap = larger part [] // peek maxHeap if the element is greater or equal to new element, insert into maxHeap
// maxHeap = smaller part [1,3] // rebalance when maxHeap.size - minHeap.size >= 2
// Step 2.1
// minHeap = larger part [3]
// maxHeap = smaller part [1] // pop the maxHeap and insert into minHeap



// Step 3
// minHeap = larger part [3, 2] // maxHeap.peek() is smaller than new element
// maxHeap = smaller part [1] // rebalance when minHeap.size - maxHeap.size >= 1

// Step 3.1
// minHeap = larger part [3] // maxHeap.peek() is smaller than new element
// maxHeap = smaller part [2, 1] // rebalance when minHeap.size - maxHeap.size >= 1

// Step 4
// minHeap = larger part [3, 4]
// maxHeap = smaller part [2, 1]


class MedianOfAStream  {
  constructor () {
    this.minHeap = new Heap([], defaultComparator)
    this.maxHeap = new Heap([], defaultMaxHeapComparator)
  }

  insert (element) {
    if (this.maxHeap.size() === 0 || this.maxHeap.peek() >= element)  {
      this.maxHeap.push(element)
    } else {
      this.minHeap.push(element)
    }
    this.re_balance()
  }

  re_balance() {
    // rebalance when maxHeap.size - minHeap.size >= 2
    if (this.maxHeap.size() - this.minHeap.size() >= 2) {
      // pop the maxHeap and insert into minHeap
      const e = this.maxHeap.pop()
      this.minHeap.push(e)
    }
    // rebalance when minHeap.size - maxHeap.size >= 1
    if (this.minHeap.size() - this.maxHeap.size() >= 1) {
      const e = this.minHeap.pop()
      this.maxHeap.push(e)
    }
  }

  get_median() {
    if ((this.maxHeap.size() + this.minHeap.size()) % 2 === 0) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    }
    return this.maxHeap.peek()
  }
}

let stream = new MedianOfAStream()

stream.insert(3)
console.log(stream.get_median())

stream.insert(1)
console.log(stream.get_median())

stream.insert(2)
console.log(stream.get_median())

stream.insert(4)
console.log(stream.get_median())