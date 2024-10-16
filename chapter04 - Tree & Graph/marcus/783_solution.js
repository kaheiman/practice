// 783. Minimum Distance Between BST Nodes
// Time Complexity = O(n)
// Space complexity = O(1)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Special Case
//      90
//    69
//  49 89
// n 52
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDiffInBST = function(root) {
  let min = Math.pow(10, 5);
  let prev = null;
  function dfs (node) {
      if (!node) { return; }
      dfs(node.left);

      if (prev !== null) {
          min = Math.min(min, (node.val - prev));
      }

      prev = node.val;
      dfs(node.right);
  }
  dfs(root);
  return min;
};

