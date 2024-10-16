// o(n) solution
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // base
  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }

  let left = 0;
  let right = height.length - 1;

  let result = 0;

  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;

    if (area > result) result = area;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return result;
};