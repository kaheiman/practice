// Time complexity O(n^2)
const insertionSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        let tempt = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tempt;
      } else {
        break;
      }
    }
  }
  return arr
}

let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(insertionSort(arr))