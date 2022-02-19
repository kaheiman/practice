/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
  let re = []
  const dfs = (remainder, combin) => {
      // base case
      if (remainder < 0 ) return
      if (remainder === 0) {
          re.push(combin);
      }
      for (let e of nums) {
          dfs(remainder - e, [...combin, e]);
      }
  }
  dfs(target, []);
  console.log(re);
  return re.length;
};