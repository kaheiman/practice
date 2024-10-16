// LeetCode 104 - Maximum Depth of Binary Tree
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
 * @return {number}
 */
 var maxDepth = function(root) {
  let depth = 1;
  let path = [];
  const dfs = (node) => {
      if (!node) return;
      path.push(node.val);
      dfs(node.left);
      dfs(node.right);
      if (!node.left && !node.right) {
          depth = Math.max(depth, path.length);
      }
      path.pop();
  }
  if (root === null) return 0;
  else {
      dfs(root);
      return depth;
  }
};