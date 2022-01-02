// Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
 var findMode = function(root) {
  let hashTable = {};
  let maxCount = null;
  let nums = [];
  function inorder(node) {
      if (!node) { return; }
      inorder(node.left);
      if (!hashTable[node.val]) {
          hashTable[node.val] = 1;
      } else {
          hashTable[node.val] += 1;
      }
      inorder(node.right);
  }
  inorder(root);
  for (const numberKey in hashTable) {
      if (maxCount === null) {
          maxCount = hashTable[numberKey];
      } else if(maxCount < hashTable[numberKey]) {
          maxCount = hashTable[numberKey];
      }
  }
  for (const numberKey in hashTable) {
      if(hashTable[numberKey] === maxCount) {
          nums.push(parseInt(numberKey));
      }
  }
  return nums;
};

// faster version without hasmap - space complexity O(1)
var findMode = function(root) {
    let prevNodeVal = null;
    let currNodeCount = 0;
    let maxNodeCount = -1;
    let mods = [];
    function inorder(node) {
        if (!node) { return; }
        inorder(node.left);
        currNodeCount = (node.val === prevNodeVal ? currNodeCount : 0) + 1;
        prevNodeVal = node.val;
        if (currNodeCount > maxNodeCount) {
            mods = [node.val];
            maxNodeCount = currNodeCount;
        } else if (currNodeCount === maxNodeCount) {
            mods.push(node.val);
        }
        inorder(node.right);
    }
    inorder(root);
    return mods;
};