// https://leetcode.com/discuss/interview-question/682992/Wish%3A-Trade-Order-System

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

// minHeap
function objMinHeapCompare(a, b) {
  return a.price < b.price;
}
// max Heap
function objMaxHeapCompare(a, b) {
	return a.price > b.price;
}

class Order {
  constructor(quantity, price) {
    this.quantity = quantity
    this.price = price
  }
}

class TradingSystem {
	constructor(){
		// min heap
		this.sellPriorityQueue = new Heap([], objMinHeapCompare);
		// max heap
		this.buyPriorityQueue = new Heap([], objMaxHeapCompare);
	}

	sell(quantity, price) {
    if (quantity === 0) return 0
    let remaining = quantity;
    while (
			this.buyPriorityQueue.empty() !== true &&
			remaining !== 0 &&
			this.buyPriorityQueue.peek().price >= price
		) {
			const buyOrder = this.buyPriorityQueue.pop();
			if (buyOrder.quantity > remaining) {
				this.buyPriorityQueue.push(
					new Order(buyOrder.quantity - remaining, buyOrder.price)
				);
        remaining = 0;
			} else {
				remaining -= buyOrder.quantity;
			}
		}

    if (remaining > 0) {
      this.sellPriorityQueue.push(new Order(remaining, price));
    }

    return quantity - remaining
	}

	buy(quantity, price) {
    if (quantity === 0) return 0;
		let remaining = quantity;

    while(this.sellPriorityQueue.empty() !== true && remaining > 0 && this.sellPriorityQueue.peek().price <= price) {
      const sellOrder = this.sellPriorityQueue.pop() // O(log(N)) where n is number of sell order
      if (sellOrder.quantity > remaining) {
				this.sellPriorityQueue.push(
					new Order(sellOrder.quantity - remaining, sellOrder.price)
				);
        remaining = 0;
			} else {
				remaining -= sellOrder.quantity;
			}
    }

    if (remaining > 0) {
      this.buyPriorityQueue.push(new Order(remaining, price))
    }

    return quantity - remaining;
  }
}

const system = new TradingSystem();
console.log("sell(50, 1.5) expect 0 actual", system.sell(50, 1.5))
console.log("sell(20, 1.4) expect 0 actual", system.sell(20, 1.4));
console.log("buy(60, 1.51) expect 60 actual", system.buy(60, 1.51));
console.log("buy(20, 1.5) expect 10 actual", system.buy(20, 1.5));
console.log("sell(20, 0.7) expect 10 actual", system.sell(20, 0.7));
console.log("buy(100, 1.6) expect 0 actual", system.buy(100, 0.6));
// System.out.println("buy(100, (float)1.6) expect 0 actual "+buy(100,(float)0.6));

// system = TradingSystem()
// system.sell(50, 1.5)
// return: 0

// system.sell(20, 1.4)
// return: 0

// system.buy(60, 1.51)
// return: 60

// system.buy(20, 1.5)
// return: 10

// system.sell(20, 0.7)
// return: 10

// system.buy(100, 0.6)
// return: 0