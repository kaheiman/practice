// Greedly solution O(N) keep moving the end goal

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  let goal = nums.length - 1;
  for (i = nums.length - 1 - 1; i >= 0; i--) {
      if (nums[i] + i >= goal) {
          goal = i;
      }
  }
  return goal === 0 ? true : false
};