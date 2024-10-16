/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
    while(left < right ) {
        let pivot = left + Math.floor((right - left) / 2);
        if (pivot > 0 && nums[pivot] < nums[pivot - 1]) {
            return nums[pivot];
        }
        if (nums[pivot] > nums[right]) {
            left = pivot + 1;
        } else {
            right = pivot - 1
        }
    }
    return nums[left];
};

console.log(findMin([1,2,3,4,5]))