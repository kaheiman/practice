/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/1500670/JavaScript-solution-Recursion-Time-O(log(n))-Space-O(1)-with-explanation
// It's a Binary Search tree...if the value is bigger go right and smaller go left.
// When it comes to trees, recursion is likely a good way to solve it and in this case reduces the amount of code we write.

// The ancestor is the parent node or one of the nodes that comes before the parent.
// if both nodes are connected to this parent/connected node it's guaranteed that this parent is the lowest value.....
// this is because it's a binary search tree.

// We do three checks.
// The first one is the most important.
// We need to find a node that statisfies this condition.
// It's essentially finding the first node that is somehow connected to the two nodes then we either go left or right until that condition is met.
// Make sure to return the recursive call.


// Time complexity is log(n) because searching in a binary search tree is log(n).
// Space Complexity is O(1)/constant because we don't use any additional data structures.
var lowestCommonAncestor = function (root, p, q) {
  if ((p.val <= root.val && root.val <= q.val) || (q.val <= root.val && root.val <= p.val)) {
    return root;
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
};