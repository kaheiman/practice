// o(n*n)
// be careful the second pointer is based on the first
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let solution = []
  for (i=0; i< nums.length -1; i++) {
      solution[0] = nums[i];
      for(j = i + 1; j < nums.length; j++) {
          if (solution[0] + nums[j] === target) {
              solution[0] = i;
              solution[1] = j;
              return solution;
          }
      }
  }
  return solution;
};