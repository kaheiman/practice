/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// idea is move all non-zero elements to the front of the array and remember which is the last non-zeo index
var moveZeroes = function(nums) {
    if (nums.length === 0) return nums
    let lastNonZeroIdx = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIdx] = nums[i]
            lastNonZeroIdx++
        }
    }
    for (let i = lastNonZeroIdx; i < nums.length; i++) {
        nums[i] = 0
    }
    console.log(nums)
};


moveZeroes([0])
moveZeroes([1, 0])
moveZeroes([0, 1])
moveZeroes([1, 0, 1])
moveZeroes([1, 1, 1, 0, 0])
moveZeroes([0, 0, 1, 1])
moveZeroes([0, 0, 1, 1, 0, 0])










// if (nums.length === 1) return nums
// let lastNonZeroIdx = 0
// for (let i = 0; i < nums.length; i++ ) {
//     if (nums[i] !== 0) {
//         nums[lastNonZeroIdx] = nums[i]
//         lastNonZeroIdx++
//     }
// }

// for (let j = lastNonZeroIdx; j < nums.length; j++) {
//     nums[j] = 0
// }

// return nums