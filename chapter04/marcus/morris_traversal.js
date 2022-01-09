//  inorder predecessor and inorder successor?
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


function morris(root) {
  let curr = root;
  while (curr) {
    console.log(curr.val);
    if (curr.left) {
      let runner = curr.left;
      while (runner.right) {
        runner = runner.right;
      }
      runner.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    } else {
      curr = curr.right;
    }
  }
}

var root = null;


function morrisTraversalPreorderVersionTwo(root) {
  let current = root;
  while (current) {
    let runner = current.left;
    if (runner === null) {
      console.log(current.val);
      current = current.right;
    }
    else {
      while (runner.right && runner.right !== current) {
        runner = runner.right;
      }
      if (runner.right) {
        console.log(current.val);
        runner.right = null;
        current = current.right;
      } else {
        console.log(`runner.right: ${current.val}`)
        console.log(`runner.val: ${runner.val}`)
        runner.right = current;
        console.log(`current: ${current.left.val}`)
        current = current.left;
      }
    }
  }
}

// Preorder traversal without
// recursion and without stack
function morrisTraversalPreorder(node) {
  while (node !== null) {
    // If left child is null, print the
    // current node data. Move to right child.
    if (node.left === null) {
      console.log(node.val);
      node = node.right;
    } else {
      // Find inorder predecessor
      var current = node.left;
      while (current.right !== null && current.right !== node) {
        current = current.right;
      }

      // If the right child of inorder predecessor
      // already points to this node
      if (current.right === node) {
        current.right = null;
        node = node.right;
      }

      // If right child doesn't point to
      // this node, then print this node
      // and make right child point to this node
      else {
        console.log(node.val);
        current.right = node;
        node = node.left;
      }
    }
  }
}

function insertLevelOrderWithNullVal(arr) {
  if (arr.length === 0 || !arr) {
    return null;
  }
  let rootNode = new TreeNode(arr[0]);
  const q = [rootNode];
  let currentProcessingNode = null;
  let isLeftNodeProcessing = true;

  for (i=1; i< arr.length; i++) {
    const tempt = new TreeNode(arr[i]);
    if (isLeftNodeProcessing) {
      currentProcessingNode = q.shift();
      isLeftNodeProcessing = false;
      currentProcessingNode.left = tempt;
    } else {
      isLeftNodeProcessing = true;
      currentProcessingNode.right = tempt;
    }
    if (arr[i] !== null) {
      q.push(tempt);
    }
  }
  return rootNode;
}

let root2;
let arr2 = [1, 2, 3, 4, 5, 6, 7];
root2 = insertLevelOrderWithNullVal(arr2);
console.log(root2)


// morrisTraversalPreorder(root2);
// morris(root2);
morrisTraversalPreorderVersionTwo(root2);