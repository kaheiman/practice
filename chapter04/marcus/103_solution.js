//Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
//  (i.e., from left to right, then right to left for the next level and alternate between).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}



//  Input: root = [3, 9, 20, null, null, 15, 7];
//  Output: [[3], [20, 9], [15, 7]];

//  Input: root = [1];
//  Output: [[1]];

//  Input: root = [];
//  Output: [];


// bfs
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let output = [];
  let deep = 0;
  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (deep % 2 == 0) level.push(node.val);
      else level.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
    deep++;
  }

  return output;
};

// dfs
// var zigzagLevelOrder = function (root) {
//   const tree = [];
//   const getZigzagTree = (node = root, dep = 0) => {
//     if (!node) return;
//     const isReverse = dep % 2;

//     tree[dep]
//       ? tree[dep][isReverse ? "unshift" : "push"](node.val)
//       : (tree[dep] = [node.val]);

//     node.left && getZigzagTree(node.left, dep + 1);
//     node.right && getZigzagTree(node.right, dep + 1);
//   };

//   getZigzagTree();
//   return tree;
// };



// function zigzagLevelOrder(root) {
//   let res = [];
//   go(root, 0, res);
//   return res;
// }

// function go(node, l, res) {
//   // l means level
//   if (!node) return;

//   if (res[l] == null) {
//     res.push([]);
//   }

//   if (l % 2 === 0) {
//     res[l].push(node.val);
//   } else {
//     res[l].unshift(node.val);
//   }

//   go(node.left, l + 1, res);
//   go(node.right, l + 1, res);
// }

function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length) {
    const tempt = new TreeNode(arr[i]);
    root = tempt
    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root
}

let root;
let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6];

root = insertLevelOrder(arr, root, 0);
console.log(root);

function insertLevelOrderWithNullVal(arr) {
  if (arr.length === 0) return null;
  let currentLeftChildProcessing = true;
  let q = [];
  const root = new TreeNode(arr[0]);
  q.push(root);
  let currentProcessingNode = null;
  for (let i = 1; i < arr.length; i++) {
    const tempt = new TreeNode(arr[i]);
    if (currentLeftChildProcessing) {
      currentProcessingNode = q.shift();
      currentLeftChildProcessing = false;
      currentProcessingNode.left = tempt;
    } else {
      // right child node processing
      currentLeftChildProcessing = true;
      currentProcessingNode.right = tempt;
    }
    // handle null node
    if (arr[i] !== null) {
      q.push(tempt);
    }
  }
  return root;
}

let root2;
let arr2 = [1,2,3,null,null,4,null,null,5];
root2 = insertLevelOrderWithNullVal(arr2);
console.log("root2: ", root2);