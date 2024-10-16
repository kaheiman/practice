/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)

  const getMax = (subProblem) => {
      let memo = new Array(subProblem.length).fill(0)
      memo[0] = subProblem[0];
      memo[1] = Math.max(subProblem[0], subProblem[1]);
      for (i = 2; i < subProblem.length; i++) {
          memo[i] = Math.max(memo[i - 2] + subProblem[i], memo[i - 1]);
      }
      return memo[subProblem.length - 1];
  }

  let front = getMax(nums.slice(1))
  let back = getMax(nums.slice(0, nums.length - 1))
  return Math.max(front, back)
};