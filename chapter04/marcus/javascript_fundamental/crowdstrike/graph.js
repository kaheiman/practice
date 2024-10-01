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
  }

  buildTreeNode(index, arr) {
    if (index > arr.length - 1 || arr[index] === null) {
      return null;
    }

    const node = new Node(arr[index]);
    node.left = this.buildTreeNode(2 * index + 1, arr);
    node.right = this.buildTreeNode(2 * index + 2, arr);
    return node;
  }

  createBinaryTree(arr) {
    if (arr.length === 0) {
      return
    }
    this.root = this.buildTreeNode(0, arr);
  }

  preOrderTraversal(node) {
    if (!node) {
      return
    }
    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
}

const tree = new Tree();
tree.createBinaryTree([1,2,4,3,null,5,6]);
tree.preOrderTraversal();