// Longest Increasing Subsequence
// Time complexity is O(N^2)
// Space complexity is O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let l = nums.length;
  if (l === 1) return 1;
  let memo = new Array(l).fill(1);
  for (i=l-1; i >= 0; i--) {
      for(j = i + 1; j < l; j++) {
          if (nums[i] < nums[j]) {
              memo[i] = Math.max(memo[i], 1 + memo[j])
          }
      }
  }
  return Math.max(...memo);
};