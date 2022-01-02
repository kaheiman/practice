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
 var minDepth = function(root) {
  let min = null;
  let currPath = [];
  const t = (node) => {
      if (!node) return;
      currPath.push(node.val);
      t(node.left);
      t(node.right);
      if (node.left === null && node.right === null) {
       if (min === null) {
           min = currPath.length;
       } else {
        min = Math.min(min, currPath.length);
       }
      }
      currPath.pop();
  }
  t(root);
  return min
};