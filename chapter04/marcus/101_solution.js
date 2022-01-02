https://leetcode.com/problems/symmetric-tree/submissions/
// symmetric tree

// Time complexity O(N); Space Complexity O(1);
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
 var isSymmetric = function(root) {
   const isEqual = (LNode, RNode) => {
      if (!LNode && !RNode) return true;
      if (!LNode || !RNode) return false;
      return LNode.val === RNode.val &&
        isEqual(LNode.left, RNode.right) &&
        isEqual(LNode.right, RNode.left);
   }
   if (!root) return true;
   return isEqual(root.left, root.right);
 }