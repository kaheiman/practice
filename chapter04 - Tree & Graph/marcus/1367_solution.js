// Time complexity is O(N + M) where N is number of nodes in linked list and M is number of nodes in tree
// Space complexity of recursive function not consider size of stack for function calls O(1) otherwise O(N + M)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSubPath = function(head, root) {
  let headNodePath = [];
  const traverseLinkedList = (node) => {
      if (!node) return;
      headNodePath.push(node.val);
      traverseLinkedList(node.next);
  }
  traverseLinkedList(head);

  let isDownwardPath = false;
  let existingPaths = [];
  let currentPath = [];
  const traverseTree = (node) => {
      if (!node) return;
      currentPath.push(node.val);
      traverseTree(node.left);
      traverseTree(node.right);
      if (!node.left && !node.right) {
          existingPaths.push(currentPath.join(''));
      }
      currentPath.pop();

  }
  traverseTree(root);

  if (headNodePath.length > 0) {
      const headPathStr = headNodePath.join('');
      for (i=0; i<existingPaths.length; i++) {
          if (existingPaths[i].indexOf(headPathStr) !== -1) {
              isDownwardPath = true;
              break;
          }
      }
  }

  return isDownwardPath;
};