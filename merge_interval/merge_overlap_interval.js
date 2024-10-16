function mergeIntervals(intervals) {
	if (!intervals.length) return [];

	// Sort intervals based on the starting point
	intervals.sort((a, b) => a[0] - b[0]);

	const result = [];
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		if (currentInterval[1] >= intervals[i][0]) {
			// There is an overlap, merge the intervals
			currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
		} else {
			// No overlap, push the current interval and update the current interval
			result.push(currentInterval);
			currentInterval = intervals[i];
		}
	}

	// Push the last interval
	result.push(currentInterval);

	return result;
}

// Example usage
console.log(
	mergeIntervals([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
); // Output: [[1, 6], [8, 10], [15, 18]]
console.log(
	mergeIntervals([
		[1, 4],
		[4, 5],
	])
); // Output: [[1, 5]]
console.log(
	mergeIntervals([
		[1, 4],
		[2, 3],
	])
); // Output: [[1, 4]]
