// common pitfall to initialize like this
// let result = new Array(bottom).fill(new Array(right).fill(-1)); 
// This is a common JavaScript pitfall, especially when initializing 2D arrays.
//  every row in result is a reference to the same inner array.

/**
const row = new Array(3).fill(-1); // [-1, -1, -1]
const matrix = new Array(3).fill(row);
matrix[0][0] = 99;
console.log(matrix);
// => [[99, -1, -1], [99, -1, -1], [99, -1, -1]]
 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0
    let left = 0
    let bottom = matrix.length
    let right = matrix[0].length
    let result = Array.from({ length: bottom}, () => new Array(right).fill(-1))
    console.log(new Array(bottom).fill([]))
    console.log(result)

    while (top < bottom && left < right) {
        // traverse left to right
        for (let i = left; i < right; i++) {
            result[top][i] = matrix[top][i]
        }
        top++
        // traverse top to bottom
        for (let i = top; i < bottom; i++) {
            result[i][right - 1] = matrix[i][right - 1]
        }
        right--
        // traverse right to left
        for (let i = right; i >= left; i--) {
            result[bottom -1][i] = matrix[bottom - 1][i]
        }
        bottom--
        // traverse bottom to top
        for (let i = bottom; i >= top; i--) {
            result[i][left] = matrix[i][left]
        }
        left++
    }
    return []
};