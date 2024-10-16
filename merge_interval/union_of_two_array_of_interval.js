function intervalIntersection(A, B) {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < A.length && j < B.length) {
		// Find the overlap between A[i] and B[j]
		const start = Math.max(A[i][0], B[j][0]);
		const end = Math.min(A[i][1], B[j][1]);

		if (start <= end) {
			result.push([start, end]);
		}

		// Move the pointer with the smaller endpoint
		if (A[i][1] < B[j][1]) {
			i++;
		} else {
			j++;
		}
	}

	return result;
}

// Example usage
console.log(
	intervalIntersection(
		[
			[0, 2],
			[5, 10],
			[13, 23],
			[24, 25],
		],
		[
			[1, 5],
			[8, 12],
			[15, 24],
			[25, 26],
		]
	)
);
// Output: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
console.log(
	intervalIntersection(
		[
			[1, 3],
			[5, 9],
		],
		[[4, 8]]
	)
);
// Output: [[5, 8]]
