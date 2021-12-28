var BST = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(val) {
  if (val < this.val) {
    if (this.left === null) {
      this.left = new BST(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = new BST(val);
    } else {
      this.right.insert(val);
    }
  }
}

//     4
//    / \
//   2   6
//  / \ / \
// 1  3 5  7

// preorder: 中->左->右，4213657
// inorder: 左->中->右，1234567 (對binary search tree做inorder traversal就是依序拿取)
// postorder: 左->右->中，1325764

BST.prototype.inorderTraversal = function() {
  if (!this.val) { return }
  if (this.left !== null) {
    this.left.inorderTraversal()
  }
  console.log(this.val)
  if (this.right !== null) {
    this.right.inorderTraversal()
  }
}

BST.prototype.postorderTraversal = function() {
  if (!this.val) { return }
  if (this.left !== null) {
    this.left.postorderTraversal()
  }
  if (this.right !== null) {
    this.right.postorderTraversal()
  }
  console.log(this.val)
}

BST.prototype.preorderTraversal = function () {
  if (!this.val) {
    return;
  }
  console.log(this.val);
  if (this.left !== null) {
    this.left.preorderTraversal();
  }
  if (this.right !== null) {
    this.right.preorderTraversal();
  }
  return
};

function createBST() {
  var b = new BST(4);
  b.insert(2);
  b.insert(6);
  b.insert(1);
  b.insert(3);
  b.insert(5);
  b.insert(7);
  return b
}

const getInorderList = (root) => {
  let list = [];
  if (!root.val) { return list }
  const inOrder = (root) => {
    if (!root.val) {
      return;
    }
    if (root.left !== null) {
      inOrder(root.left);
    }
    list.push(root.val);
    if (root.right !== null) {
      inOrder(root.right);
    }
  };
  inOrder(root)
  return list
}

const getPostorderList = (root) => {
  let list = []
  if (!root.val) {
    return list;
  }
  const postorder = (root) => {
    if (root.left !== null) {
      postorder(root.left)
    }
    if (root.right !== null) {
      postorder(root.right)
    }
    list.push(root.val)
  }
  postorder(root)
  return list
}

const getPreorderList = (root) => {
  let list = [];
  if (!root.val) { return list }
  const preorder = (root) => {
    list.push(root.val)
    if (root.left) { preorder(root.left); }
    if (root.right) { preorder(root.right); }
  }
  preorder(root)
  return list
}

// LeetCode 938 : low 2, high 8  Time complexit O(logN) , where N is total number of nodes
const rangeSumBST = (root, low, high) => {
  let sum = 0;
  const inOrderTravseral = (root) => {
    if (root === null) {return}
    inOrderTravseral(root.left)
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    inOrderTravseral(root.right);
  }
  inOrderTravseral(root)
  return sum
}


function main() {
  rootNode = createBST()
  let list = getInorderList(rootNode);
  console.log("inoder list: ", list);
  list = getPreorderList(rootNode);
  console.log("preorder list: ", list);
  list = getPostorderList(rootNode);
  console.log("postorder list: ", list);
  sum = rangeSumBST(rootNode, 4, 8);
  console.log("[LeetCode 938] sum of bts: ", sum)
}

main()