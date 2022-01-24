// Time complexity nlog(n)

const merge = (leftArr, rightArr) => {
  let l = 0;
  let r = 0;
  let output = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      output.push(leftArr.shift());
      l++;
    } else {
      output.push(rightArr.shift());
      r++;
    }
  }
  return [...output, ...leftArr, ...rightArr]
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}


let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(mergeSort(arr))