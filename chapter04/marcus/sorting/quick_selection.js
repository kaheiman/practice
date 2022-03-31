const partition = (nums, low, high) => {
	if (low === high) return low;
	const pivot = nums[high];
	for (let i = low; i < high; i++) {
		if (nums[i] < pivot) {
			[nums[low], nums[i]] = [nums[i], nums[low]];
			low += 1;
		}
	}
	[nums[low], nums[high]] = [nums[high], nums[low]];
	return low;
};

const quickSelectionInPlace = (nums, k, start, end) => {
	const p = partition(nums, start, end);
	if (p === k - 1) {
		return nums[p];
	}
	// 4 > 4
	if (p > k - 1) {
		// left hand side
		return quickSelectionInPlace(nums, k, start, p - 1);
	}
	// right hand side
	return quickSelectionInPlace(nums, k, p + 1, end);
};

let nums = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85];
console.log(
	"quickSelectionInPlace: ",
	quickSelectionInPlace(nums, 4, 0, nums.length - 1)
);

const quickSelection = (arr, k, start, end) => {
	let pivot = arr[end];
	let left = [];
	let right = [];
	for (let i = start; i < end; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	if (left.length + 1 === k) {
		return pivot;
	} else if (left.length < k) {
		// right
		return quickSelection(right, k - 1 - left.length, 0, right.length - 1);
	} else {
		// left
		return quickSelection(left, k, 0, left.length - 1);
	}
};

let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85];
console.log("quickSelection: ", quickSelection(arr, 4, 0, arr.length - 1));
