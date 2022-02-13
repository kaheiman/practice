// O(n^2)
// reverse version of bubble sort, every time find the smallest element element and put into the begining of an array
const selectionSort = (arr) => {
  for (i=0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    const tempt = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = tempt;
  }
  return arr;
}
let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(selectionSort(arr))