// O(n^2)
const bubbleSort = (arr) => {
  for (i = 0; i< arr.length -1; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        const tempt = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tempt;
      }
    }
  }
  return arr;
}

let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(bubbleSort(arr))