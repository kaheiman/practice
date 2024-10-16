// binary search the smallest element first
// and do binary search again
// O(LOG(N))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > nums[right]) {
          left = mid +1;
      } else {
          right = mid;
      }
  }

  let start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
      left = start;
  } else {
      right = start;
  }

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid -1;
      }
  }

  return -1;
};