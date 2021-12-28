// need to be sorted asscending order
// divde and conquer
//


// If you think of the balanced BST,
// it's basically a sorted array where the leftmost node is the minimum and the
// rightmost node is the maximum and the root is exactly in the middle.
// If there are no elements in the array, we return null,
// that's our base case for the recursion.
// Otherwise we return a new TreeNode with the central value
// (root of our subtree), and call the same function recursively
// for the left and right part of the array.

// We need to visit all the nodes ones, so the time complexity is O(N), space
// needed for the recursion is O(H) where H is the height of the tree.

var TreeNode = function(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var createBalancedSearchTree = function(nums, start = 0, end = nums.length - 1) {
  if (start > end) {
    return null;
  }
  const mid = (start + end) >> 1;
  return new TreeNode(
    nums[mid],
    createBalancedSearchTree(nums, start, mid - 1),
    createBalancedSearchTree(nums, mid + 1, end),
  );
}

let a = [-10, -3, 0, 5, 9, 12];
console.log(createBalancedSearchTree(a));
