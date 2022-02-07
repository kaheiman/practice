// https://www.youtube.com/watch?v=T41rL0L3Pnw&t=664s
// Space complexity is O(n + m)
// Time complexity is O(m * n)

// Thinking process
// leverage the space of first row and col or matrix to store 0 + extra space (rowZero)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const row = matrix.length;
	const col = matrix[0].length;

	let rowZero = false;

	for (r = 0; r < row; r++) {
		for (c = 0; c < col; c++) {
			if (matrix[r][c] === 0) {
				matrix[0][c] = 0;
				if (r > 0) {
					matrix[r][0] = 0;
				} else {
					rowZero = true;
				}
			}
		}
	}
	console.log(matrix, rowZero);

	for (r = 1; r < row; r++) {
		for (c = 1; c < col; c++) {
			if (matrix[0][c] === 0 || matrix[r][0] === 0) {
				matrix[r][c] = 0;
			}
		}
	}

	if (matrix[0][0] === 0) {
		for (r = 0; r < row; r++) {
			matrix[r][0] = 0;
		}
	}

	if (rowZero === true) {
		for (c = 0; c < col; c++) {
			matrix[0][c] = 0;
		}
	}

	return matrix;
};
