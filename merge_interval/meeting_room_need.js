function minMeetingRooms(intervals) {
	if (!intervals.length) return 0;

	// Separate start and end times
	const startTimes = intervals
		.map((interval) => interval[0])
		.sort((a, b) => a - b);
	const endTimes = intervals
		.map((interval) => interval[1])
		.sort((a, b) => a - b);

	let startPointer = 0;
	let endPointer = 0;
	let roomsRequired = 0;

	// Traverse through all the start times
	while (startPointer < intervals.length) {
		if (startTimes[startPointer] >= endTimes[endPointer]) {
			// One meeting has ended, free up a room
			endPointer++;
		} else {
			// No meeting has ended, we need a new room
			roomsRequired++;
		}
		startPointer++;
	}

	return roomsRequired;
}

// Example usage
console.log(
	minMeetingRooms([
		[0, 30],
		[5, 10],
		[15, 20],
	])
); // Output: 2
console.log(
	minMeetingRooms([
		[7, 10],
		[2, 4],
	])
); // Output: 1
console.log(
	minMeetingRooms([
		[1, 5],
		[8, 9],
		[8, 9],
	])
); // Output: 2
