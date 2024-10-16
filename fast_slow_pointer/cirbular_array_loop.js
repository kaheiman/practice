function circularArrayLoop(nums) {
	function nextIndex(nums, currentIndex) {
		let n = nums.length;
		return (((currentIndex + nums[currentIndex]) % n) + n) % n; // Adjust for negative values
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) continue; // Skip if already visited

		let slow = i;
		let fast = i;

		while (
			nums[slow] * nums[nextIndex(nums, slow)] > 0 &&
			nums[fast] * nums[nextIndex(nums, fast)] > 0 &&
			nums[fast] * nums[nextIndex(nums, nextIndex(nums, fast))] > 0
		) {
			slow = nextIndex(nums, slow);
			fast = nextIndex(nums, nextIndex(nums, fast));

			if (slow === fast) {
				if (slow === nextIndex(nums, slow)) break; // Single element loop

				return true;
			}
		}

		// Mark all elements in the cycle as 0 to prevent re-visiting
		slow = i;
		let value = nums[i];
		while (nums[slow] * value > 0) {
			let next = nextIndex(nums, slow);
			nums[slow] = 0;
			slow = next;
		}
	}

	return false;
}

// Example usage
console.log(circularArrayLoop([2, -1, 1, 2, 2])); // Output: true
console.log(circularArrayLoop([-1, 2])); // Output: false
console.log(circularArrayLoop([-2, 1, -1, -2, -2])); // Output: false
