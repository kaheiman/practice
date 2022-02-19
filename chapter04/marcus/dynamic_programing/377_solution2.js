/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
  let memo = new Array(target + 1).fill(0);
  let re = [];
  for (i = 1; i <= target; i++) {
      let count = 0;
      for (let num of nums) {
          if (i - num > 0) {
              count += memo[i-num];
          }
          if (i - num === 0) {
              count++;
          }
      }
      memo[i] = count;
  }
  return memo[target]
};