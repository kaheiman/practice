
// Time complexity = O(N)
// Space complexity = stack space complexity = O(log(n)) for completely balanced tree and O(n) for completely inbalanced tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let isSame = true;
  var traversal = function (node1, node2) {
    if (node1 && node2 && node1.val === node2.val) {
      traversal(node1.left, node2.left);
      traversal(node1.right, node2.right);
    } else if (node1 !== node2) {
      isSame = false;
    }
  };
  traversal(p, q);
  return isSame;
};
