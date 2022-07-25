const find_subsets = (nums) => {
  let subsets = [[]];
  for (let num of nums) {
    // console.log('nums: ', num)
    let n = subsets.length;
    for (let i = 0; i < n; i++) {
      let newSet = subsets[i].slice(0);
      newSet.push(num);
      subsets.push(newSet);
    }
  }
  return subsets
};

console.log("Here is the list of subsets: ");
let result = find_subsets([1, 3]);
result.forEach((subset) => {
	console.log(subset);
});

console.log("Here is the list of subsets: ");
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
	console.log(subset);
});

const find_duplicate_subsets = (nums) => {
  let subsets = [[]];
  let startIdx = 0;
  let endIdx = 0;

  // asending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let curVal = nums[i];
    if (i > 0 && curVal === nums[i + 1]) {
      startIdx = endIdx + 1;
    }
    endIdx = subsets.length - 1;
    for (startIdx; startIdx <= endIdx; startIdx++) {
      let newSet = subsets[startIdx].slice(0)
      newSet.push(curVal);
      subsets.push(newSet);
    }
  }

  return subsets;
}

console.log("Here is the list of subsets: ");
let result1 = find_subsets([1, 3, 3]);
result1.forEach((subset) => {
	console.log(subset);
});

console.log("Here is the list of subsets: ");
result1 = find_subsets([1, 5, 3, 3]);
result1.forEach((subset) => {
	console.log(subset);
});

//  the number of subsets doubles as we add each element to all the existing subsets, therefore, we will have a total of O(2^N) where n is number
//  of element. And since we construct a new subset from an existing set, therefore, the time complexity of the above is n * O(2^N)

// space complexity is same as time complexity

