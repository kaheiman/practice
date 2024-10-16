function findThreeSum(arr, target) {
	// Sort the array to use the two-pointer technique
	arr.sort((a, b) => a - b);

	// Iterate through the array
	for (let i = 0; i < arr.length - 2; i++) {

		// Avoid duplicates, just for optimal the solution (not necessary)
		if (i > 0 && arr[i] === arr[i - 1]) continue;

		let left = i + 1;
		let right = arr.length - 1;

		while (left < right) {
			const sum = arr[i] + arr[left] + arr[right];

			if (sum === target) {
				return true; // Found the three numbers that sum up to the target
			} else if (sum < target) {
				left++; // Move the left pointer to the right to increase the sum
			} else {
				right--; // Move the right pointer to the left to decrease the sum
			}
		}
	}

	return false; // No such triplet found
}

// Example usage where handling duplicates is crucial
console.log(findThreeSum([1, 1, 2, 2, 2, 3, 4], 6)); // Output: true
