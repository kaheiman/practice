function leastInterval(tasks, n) {
	const taskCounts = {};
	let maxCount = 0;
	let maxCountTasks = 0;

	// Count the frequency of each task
	for (let task of tasks) {
		taskCounts[task] = (taskCounts[task] || 0) + 1;
		if (taskCounts[task] > maxCount) {
			maxCount = taskCounts[task];
			maxCountTasks = 1;
		} else if (taskCounts[task] === maxCount) {
			maxCountTasks++;
		}
	}

	// Calculate the number of parts, part length, empty slots, available tasks, and idle slots
	const partCount = maxCount - 1;
	const partLength = n - (maxCountTasks - 1);
	const emptySlots = partCount * partLength;
	const availableTasks = tasks.length - maxCount * maxCountTasks;
	const idles = Math.max(0, emptySlots - availableTasks);

	// Return the total time which is the sum of tasks and idles
	return tasks.length + idles;
}

// Example usage
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // Output: 8
console.log(
	leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2)
); // Output: 12
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); // Output: 6
