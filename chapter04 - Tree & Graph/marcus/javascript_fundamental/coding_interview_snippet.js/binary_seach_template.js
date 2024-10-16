const binary_search = (list, e) => {
  // check is asc or desc
  let size = list.length;
  let start = 0;
  let end = size - 1;
  let isAsc = list[end] > list[start]

  // while loop unitl start > end
  while(start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let curEle = list[mid];
    if (curEle === e) return mid;

    if (isAsc) {
      if (curEle > e) {
        end = mid - 1;
      }
      if (curEle < e) {
        start = mid + 1;
      }
    } else {
      if (curEle > e) {
        start = mid + 1;
      }
			if (curEle < e) {
        end = mid - 1;
			}
    }
  }

  return -1;
}

const binary_search_cloest_element = (arr, target) => {
  if (arr.length === 0) return -1
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1;
    }
  }
  console.log('end ', end)
  if (Math.abs(arr[end] - target) > Math.abs(arr[end - 1] - target)) {
    return end - 1
  } else {
    return end
  }
}

console.log('idx: ',  binary_search([1,2,3,4,5,6], 4))
console.log('idx', binary_search([11, 7, 5, 3, 1], 6))

console.log("close idx", binary_search_cloest_element([1, 3, 5, 7, 11], 6));
