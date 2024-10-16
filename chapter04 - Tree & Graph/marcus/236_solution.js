// Lowest common ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 就是以下3點必然會恰好成立2點：
// 1. 節點自己是p或q
// 2. 節點的左子樹有p或q
// 3. 節點的右子樹有p或q
// Time complexity O(n)
// Space complexity O(n)
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) { return root }
  const leftNode = lowestCommonAncestor(root.left, p, q)
  const rightNode = lowestCommonAncestor(root.right, p, q)
  if (root === p || root === q) { return root }
  else if (leftNode !== null && rightNode !== null ) {
    return root
  } else {
    return leftNode !== null ? leftNode : rightNode;
  }
}