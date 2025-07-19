/**
 * But since the input array is already sorted, we can do better and solve it in O(n) time using the two-pointer technique.

🧠 Key Insight:
The most negative numbers (on the left) and the most positive numbers (on the right) will produce the largest squares.

So we use two pointers — one at the beginning and one at the end — and fill the result array from the back.
 */

// O (N) time solution, O(N) space

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length - 1;
    const result = []

    while (left <= right) {
        const leftMax = Math.pow(nums[left], 2)
        const rightMax = Math.pow(nums[right], 2)

        if (leftMax > rightMax) {
            result[pos] = leftMax
            left++
        } else {
            result[pos] = rightMax
            right--
        }

        pos--
    }
    return result
};