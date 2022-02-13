// Time complexity n^2
// https://www.youtube.com/watch?v=jXZDUdHRbhY&feature=youtu.be&ab_channel=CoderSnacks
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // base case
  if (nums.length < 3) {
    return [];
  }
  let sol = [];
  // nlogn
  nums.sort((a, b) => a - b)

  for (i = 0; i < nums.length - 2; i++) {
    if (nums[0] > 0) return [];
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        sol.push([nums[i], nums[j], nums[k]]);
        k--;
        j++;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return sol;
};