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

console.log('idx: ',  binary_search([1,2,3,4,5,6], 4))
console.log('idx', binary_search([11, 7, 5, 3, 1], 5))