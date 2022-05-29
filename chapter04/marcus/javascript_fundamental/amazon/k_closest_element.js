 // Input: K = 4, X = 35
let arr = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56]
let K = 4;
let targetX = 36;
// X might not exist in array
// eg: X = 35 => 30 39 42 45
// eg: X = 34 => 30, 35, 39, 42
// eg: X > last element => 50, 53, 55, 56
// eg: X < first element => 12, 16, 22, 30



// Idea (get difference between X and element and sorted the element by difference) => Heap / Priority Queue
// Binary search of closet index
const binary_search_cloest_element = (arr, target) => {
	if (arr.length === 0) return -1;
	let start = 0;
	let end = arr.length - 1;
	// start < end -> end = the smallest number lower than target;
  // start <= end -> end = ceiling of the target
	while (start < end) {
		let mid = Math.floor(start + (end - start) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	if (Math.abs(arr[end] - target) > Math.abs(arr[end - 1] - target)) {
		return end - 1;
	} else {
		return end;
	}
};

const idx = binary_search_cloest_element(arr, targetX);
console.log('idx: ', idx)
let result = []
let leftIdx = idx - 1;
let rightIdx = idx + 1;
if (arr[idx] !== targetX) {
  result.push(arr[idx]);
}
while (result.length < K) {
  if (leftIdx < 0 && rightIdx >= arr.length) break
  if (leftIdx < 0) {
    result.push(arr[rightIdx]);
    rightIdx++;
    continue
  }
  if (rightIdx >= arr.length) {
    result.push(arr[leftIdx]);
    leftIdx--;
    continue
  }
  if (Math.abs(arr[leftIdx] - targetX) < Math.abs(arr[rightIdx] - targetX)) {
    result.push(arr[leftIdx]);
    leftIdx--;
  } else {
    result.push(arr[rightIdx]);
		rightIdx++;
  }
}

console.log('result: ', result)
// Can l do better ?
// elements always from the left hand side / right hand side of the closest element
// find the closest left index and right index
// if (output length < k) ->
// if (left index out of bound && right index out of bound) return
// if (left index out of bound) push right index; right index++ return
// if (right index out of bound) push left index; left index++ return;
// check whether left index is smaller than right index element -> left index++ else right index ++



// Time complexity O(K) + O(Log(N))
// Space complexity O(K)

