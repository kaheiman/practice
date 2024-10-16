// Time complexity O(n^2)
// Reverse version of bubble sort, better than selection sort
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

// for a new element compare with the rightest sorted element, and keep on swaping them until
// new element is greater or equal to the n - 1 element
// [-123] 99 => [-123, 99]
// [-123, 99] 37 => [-123, 37, 99]
// [-123, 37, 99] 77 => [-123, 37, 77, 99]
let arr = [-123, 99, 37, 77, 0, -56, 1, 199, -201, -300, 85]
console.log(insertionSort(arr))