function employeeFreeTime(schedule) {
	const allIntervals = [];

	// Flatten the schedule into one list of intervals
	for (const intervals of schedule) {
		for (const interval of intervals) {
			allIntervals.push({ start: interval[0], end: interval[1] });
		}
	}

	// Sort intervals by their start times
	allIntervals.sort((a, b) => a.start - b.start);

	const mergedIntervals = [];
	let currentInterval = allIntervals[0];

	for (let i = 1; i < allIntervals.length; i++) {
		if (currentInterval.end >= allIntervals[i].start) {
			// Overlapping intervals, merge them
			currentInterval.end = Math.max(currentInterval.end, allIntervals[i].end);
		} else {
			// Non-overlapping interval, add the current interval to the merged list
			mergedIntervals.push(currentInterval);
			currentInterval = allIntervals[i];
		}
	}

	// Add the last interval
	mergedIntervals.push(currentInterval);

	const freeTimeIntervals = [];

	// Find gaps between merged intervals
	for (let i = 1; i < mergedIntervals.length; i++) {
		const previousInterval = mergedIntervals[i - 1];
		const currentInterval = mergedIntervals[i];

		if (previousInterval.end < currentInterval.start) {
			freeTimeIntervals.push([previousInterval.end, currentInterval.start]);
		}
	}

	return freeTimeIntervals;
}

// Example usage
const schedule = [
	[
		[1, 2],
		[5, 6],
	],
	[[1, 3]],
	[[4, 10]],
];

console.log(employeeFreeTime(schedule));
// Output: [[3, 4]]
