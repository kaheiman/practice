/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)
  let memo = new Array(nums.length).fill(0)
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);
  for (i = 2; i < nums.length; i++) {
      memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
  }
  return memo[nums.length - 1];
};