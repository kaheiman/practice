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


console.log('cyclic sort', cyclic_sort([3, 2, 1, 4]));

console.log('find_missing_number:', find_missing_number([4, 0, 3, 1]))

console.log('find_missing_number', find_missing_number([9, 0, 3, 1]));
