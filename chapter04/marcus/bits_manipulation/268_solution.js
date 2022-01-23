// O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let res = nums.length;
  for (i=0; i< nums.length; i++) {
      res ^= i;
      res ^= nums[i];
  }
  return res;
};