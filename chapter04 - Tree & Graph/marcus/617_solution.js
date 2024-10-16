// when one of node is null, no need to continue check it
// merge when one of the node is null
// Time complexity : O(m).
// A total of m nodes need to be traversed. Here, m represents the minimum number of nodes from the two given trees.

// Space complexity : O(m). The depth of the recursion tree can go upto m in the case of a skewed tree.
// In average case, depth will be O(logm).

var mergeTree = function(treeNode1, treeNode2) {
  if (treeNode1 === null) {
    return treeNode2;
  }
  if (treeNode2 === null) {
    return treeNode1;
  }
  treeNode1.val += treeNode2.val;
  treeNode1.left = mergeTree(treeNode1.left, treeNode2.left);
  treeNode1.right = mergeTree(treeNode1.right, treeNode2.right);
  return treeNode1;
}