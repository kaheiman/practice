/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum =0;
  let best = nums[0];
  for (i=0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    best = Math.max(best, sum);
  }
  return best;
};