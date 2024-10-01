class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


class Tree {
  constructor() {
    this.root = null;
    this.level = null;
    this.zigOrder = [];
  }

  buildTree(index, arr)  {
    if (index > arr.length - 1 || arr[index] === null) return null
    const newNode = new Node(arr[index]);
    const leftNode = this.buildTree(2 * index + 1, arr)
    const rightNode = this.buildTree(2 * index + 2, arr);

    newNode.left = leftNode;
    newNode.right = rightNode;
    return newNode;
  }

  createBinaryTree(arr) {
    if (arr.length === 0) {
      return
    }
    this.root = this.buildTree(0, arr)
  }

  zigZagOrderTraversal() {
    if (!this.root) {
			return;
		}
    let level = 1;
		const queue = [[this.root]];
    let isOdd = false
    while (queue.length > 0) {
      const temptQueue = [];
      const output = [];
      const current = queue.shift();
      for (let i = 0; i < current.length; i++) {
        output.push(current[i].value);
        if (current[i].left) {
          temptQueue.push(current[i].left)
        }
        if (current[i].right) {
					temptQueue.push(current[i].right);
				}
      }
      if (temptQueue.length > 0) queue.push(temptQueue);
      level++;
      if (isOdd) {
        output.reverse();
      }
      this.zigOrder.push(output)
      isOdd = !isOdd;
    }
    this.level = level
  }

  levelOrderTraversal() {
    if (!this.root) {
      return
    }
    const queue = [this.root];
    while(queue.length > 0) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.value);
    }
  }
}

const t = new Tree();
t.createBinaryTree([1,2,3,4,5,6,7]);
t.zigZagOrderTraversal();
console.log(t.zigOrder);

