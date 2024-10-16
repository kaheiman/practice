/**
 * @param {number[]} nums
 * @return {boolean}
 */


 var canJump = function(nums) {
  if (nums.length === 1) {
      return true;
  }

  let dp = new Array(nums.length).fill(undefined);
  let endIdx = nums.length - 1;

  const dfs = (idx) => {
      if (dp[idx] !== undefined) return dp[idx];
      if (idx >= endIdx) return true;
      if(nums[idx] === 0) {
          return false;
      }

      for (let i = nums[idx]; i >= 1; i--) {
          let newIdx = idx + i;
          if (dfs(newIdx)) {

              dp[idx] = true;
              return true
          }
      }

      dp[idx] = false;
      return false;
  }

  return dfs(0);
};