// O(nlog(n))
const quickSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
  } else if (leftArr.length === 0) {
    return [pivot, ...quickSort(rightArr)]
  } else {
    return [...quickSort(leftArr), pivot]
  }
}

let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(quickSort(arr))