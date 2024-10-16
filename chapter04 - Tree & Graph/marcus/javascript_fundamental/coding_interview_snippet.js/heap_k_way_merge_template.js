const Heap = require("./collections/heap");


class ListNode {
	constructor(value, next = null) {
    this.next = next;
		this.value = value;
	}
}


const merged_k_sorted_list = (lists) => {
  let minHeap = new Heap([], null, (a, b) => b.value - a.value);

  for (let list of lists) {
		if (list) {
			minHeap.push(list);
		}
	}

  while (minHeap.size > 0) {
    let curMin = minHeap.pop();
    if (curMin.next) {
      minHeap.push(curMin.next)
    }
  }
};

console.log(
	"merged_k_sorted_list: ",
	merged_k_sorted_list([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
