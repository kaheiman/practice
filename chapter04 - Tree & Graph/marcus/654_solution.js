/**
 *
 * @param {Complexity Analysis

Time complexity : O(n^2)O(n
2
 ). The function construct is called nn times. At each level of the recursive tree, we traverse over all the nn elements to find the maximum element. In the average case, there will be a \log nlogn levels leading to a complexity of O\big(n\log n\big)O(nlogn). In the worst case, the depth of the recursive tree can grow upto nn, which happens in the case of a sorted numsnums array, giving a complexity of O(n^2)O(n
2
 ).

Space complexity : O(n)O(n). The size of the setset can grow upto nn in the worst case. In the average case, the size will be \log nlogn for nn elements in numsnums, giving an average case complexity of O(\log n)O(logn)} nums
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
  const findMaxIndex = (arr) => {
      let idx = 0;
      for (i=0; i<arr.length; i++) {
          if (arr[i] > arr[idx]) {
              idx = i;
          }
      }
      return idx;
  }
  const createNode = (arr) => {
      if (arr.length === 0) return;
      let maxIdx = findMaxIndex(arr);
      let newNode = new TreeNode(arr[maxIdx]);
      let prefix = arr.slice(0, maxIdx);
      let subfix = arr.slice(maxIdx + 1, arr.length);
      if (prefix.length > 0) {
         newNode.left = createNode(prefix);
      }
      if (subfix.length > 0) {
         newNode.right = createNode(subfix);
      }
      return newNode;
  }
  return createNode(nums);
};