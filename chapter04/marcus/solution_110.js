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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  let isBalancedTree = true
  const dfs = (node) => {
    if (!isBalanced) return;
    if (!node) return 0;
    const lDepth = dfs(node.left);
    const rDepth = dfs(node.right);


    if (Math.abs(lDepth - rDepth) > 1) {
      isBalancedTree = false;
    }

    return Math.max(lDepth,  rDepth) + 1
  }
  dfs(root);
  return isBalancedTree;
}
