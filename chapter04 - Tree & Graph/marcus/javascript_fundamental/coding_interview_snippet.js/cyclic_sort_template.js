const cyclic_sort = (nums) => {
  let count = 0 ;
  while (count < nums.length) {
    let e = nums[count];
    if (e === count + 1) {
      count++;
      continue;
    }
    let tempt = nums[e - 1];
    nums[e - 1] = e;
    nums[count] = tempt;
  }
  return nums
}

const cyclicSortZeroToN = (nums) => {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i];  // The correct index is the value itself since range starts from 0
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  // Swap the elements
        } else {
            i++;  // Move to the next index
        }
    }
    return nums;
}

// Example usage
const arr = [3, 0, 2, 1, 4];
console.log(cyclicSortZeroToN(arr));  // Output should


const find_missing_number = (nums) => {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    let j = nums[i];
    if (j !== i && j < n) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (let k = 0; k < n; k++) {
    if (nums[k] !== k) {
      return k;
    }
  }
}


function firstMissingPositive(nums) {
    const n = nums.length;

    // Step 1: Place each number in its correct position
    let i = 0;
    while (i < n) {
        let correctIndex = nums[i] - 1;
        // Swap only if the current number is in the range [1, n] and not in its correct position
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIndex]) {
            [nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]]; // Swap elements
        } else {
            i++;
        }
    }

    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1; // The first missing positive integer
        }
    }

    // If no missing number in the range [1, n], then the missing number is n+1
    return n + 1;
}

// Example usage
const nums = [3, 4, -1, 1];
console.log("First missing positive is:", firstMissingPositive(nums)); // Output should be 2


console.log('cyclic sort', cyclic_sort([3, 2, 1, 4]));

console.log('find_missing_number:', find_missing_number([4, 0, 3, 1]))

console.log('find_missing_number', find_missing_number([9, 0, 3, 1]));
