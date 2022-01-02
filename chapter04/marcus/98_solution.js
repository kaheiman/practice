// 98. Validate Binary Search Tree
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

// Time Complexity O(n)
// Space Complexity O(1)
 var isValidBST = function(root) {
  let isValid = true;
  let prev = null;
  function inorder(node) {
      if(isValid === false || !node) { return; }
      inorder(node.left);
      if (prev !== null && prev >= node.val) {
          isValid = false;
      }
      prev = node.val;
      inorder(node.right);
  }
  inorder(root);
  return isValid;
};

var isValidBST = function(root) {
    const t = (node, state) => {
      if (!node) return true;
      if (!t(node.left, state)) { return false };
      if (state.length > 0 && state[state.length - 1] >= node.val) {
        return false;
      }
      state.push(node.val);
      if (!t(node.right, state)) { return false };
      return true;
    };
    return t(root, []);
  }