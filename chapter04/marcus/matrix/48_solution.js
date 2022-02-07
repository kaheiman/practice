var rotate = function (matrix) {
	let [l, r] = [0, matrix.length - 1];

	while (l < r) {
		for (let i = 0; i < r - l; i++) {
			let [top, bottom] = [l, r];
			let topLeft = matrix[top][l + i];

			matrix[top][l + i] = matrix[bottom - i][l];

			matrix[bottom - i][l] = matrix[bottom][r - i];

			matrix[bottom][r - i] = matrix[top + i][r];

			matrix[top + i][r] = topLeft;
		}

		l += 1;
		r -= 1;
	}
};
