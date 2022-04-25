const max_sub_array = (nums, size) => {
  let windowStart = 0;
  let globalMax = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i > size - 1) {
      // remove windowStart
      sum -= nums[windowStart];
      windowStart += 1;
    }
    if (i >= size - 1) {
      // update global sum
      if (sum > globalMax) {
        globalMax = sum;
      }
    }
  }

  return globalMax;
}

// [2, 1, 5, 1, 3, 2], (k = 3);
console.log("max sub array: ", max_sub_array([2, 3, 4, 1, 5], 2));


// smallest length with sum greater than s
const smallest_arr = (s, nums) => {
  let windowStart = 0;
  let windowEnd = 0;
  let size = nums.length;
  let globalMin = size;
  let localSum = 0;

  for (windowEnd; windowEnd < size; windowEnd++) {
		localSum += nums[windowEnd];
		if (localSum >= s) {
			let d = windowEnd - windowStart + 1;
			if (d < globalMin) globalMin = d;
			while (localSum >= s) {
				localSum -= nums[windowStart];
				windowStart += 1;
				if (localSum > s && windowEnd - windowStart + 1 < globalMin) {
					globalMin = windowEnd - windowStart + 1;
				}
			}
		}
	}
  return globalMin;
	// keep expand the arr until greater than s
	// update global minumum
	// keep shrinking the arr until smaller than s
	// update global minumum
  // iterate if s is smaller than nums || windowEnd = size - 1
}

console.log("smallest length arr: ", smallest_arr(8, [3, 4, 1, 1, 9]));


const non_repeat_substring = function (str) {
	// hashmap to rmb the visited charcter with its location
  let visitedMap = new Map();
  let windowStart = 0;
  let windowEnd = 0;
  let size = str.length;
  let globalMax = -1;
  for (windowEnd; windowEnd < size; windowEnd++) {
    let char = str[windowEnd];
    if (visitedMap.has(char)) {
      if (windowStart > visitedMap.get(char)) {
        visitedMap.set(char, windowEnd);
      } else {
        visitedMap.set(char, windowEnd);
        windowStart = windowEnd;
      }
    } else {
      visitedMap.set(char, windowEnd);
      if (windowEnd - windowStart + 1 > globalMax) {
        globalMax = windowEnd - windowStart + 1;
      }
    }
  }
		// update global max if (windowEnd - windowStart + 1 > global)

		// update hashtable when character repeated (also check windowStart is larger than location)
		return globalMax;
};

console.log("non repeated characters string: ", non_repeat_substring("abccde"));