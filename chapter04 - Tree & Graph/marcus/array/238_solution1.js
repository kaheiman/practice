/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let pre = new Array(nums.length).fill(0);
  let post = new Array(nums.length).fill(0);
  let output = [];
  const lastIdx = nums.length - 1;

  for (j=0; j < nums.length; j++) {
      if (j === 0) {
          pre[j] = nums[j];
          post[lastIdx] = nums[lastIdx];
      } else {
          pre[j] = pre[j - 1] * nums[j];
          post[lastIdx - j] = post[lastIdx + 1 - j] * nums[lastIdx - j];
      }
  }

  for (i=0; i < nums.length; i++) {
      if (i === 0) {
          output[i] = post[1];
      }
      else if (i === lastIdx) {
          output[i] = pre[i - 1];
      }
      else {
          console.log(i)
          output[i] = pre[i -1] * post[i + 1]
      }
  }
  return output
};