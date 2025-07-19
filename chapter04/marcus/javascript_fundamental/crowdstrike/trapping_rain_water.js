/**
 * 
 * 
    // // Considering how to calculate the storage from each bar
    // We need to know the taller bar on the left and the taller bar on the right
    // Trayed water can be represented in a formula storage= Math.min(leftMax, rightMax) - height[i]
    // we always move pointer on the side with smaller height to make sure trapperd water is limited by the current maxHeight on that side 
    // Space O(N) // Time O(1)
 */
/**
 * @param {number[]} height
 * @return {number}
 */

// Approach 1: Brute Force
var trap = function(height) {
    // the key idea is, at each index i, the max water can be trapped is min(leftMax, rightMax) - height[i], this is because water can only be trapped
    //  between 2 smallest bar on the left and right
    let total = 0;
    const totalItem = height.length
    // to find leftMax and rightMax, the bruteForce approach
    for (let i = 0; i < height.length; i++) {
        const currentHeight = height[i];
        const leftMax = Math.max(...height.slice(0, i + 1))
        const rightMax = Math.max(...height.slice(i + 1, totalItem))       // Math.max(...[]) -> -Infinity 
        let localMin = Math.min(leftMax, rightMax)
        if (localMin === Number.NEGATIVE_INFINITY) {
            localMin = 0
        }
        const trapedWater = localMin - currentHeight
        if (trapedWater > 0) {
            total += trapedWater
        }
    }
    return total
};

// Approach 2: Left and Right Pointers 
/**
 * @param {number[]} height
 * @return {number}
 */

// O(N)
var trap = function(height) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;
    let total = 0;
    // we don't have to consider left <= right, because rightest bar won't store water
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]
            } else {
                total += leftMax - height[left]
            }
            left++
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right]
            } else {
                total += rightMax - height[right]
            }
            right--
        }
    }
    return total
}