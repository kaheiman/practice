/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// The idea is keep

// Let's image if only have a sorted array, and cut it into half

// [[1,2,3] [4,5,6]] // even
// [[1,2],[3,4,5] // odd

// we can get medium in the left most item of right partition, when length is odd
// or rightmost item of left partition + leftmost item of right partition

// From the above example, we can see a pattern,
// 1. the leftmost item of right partition should always larger or equal to the rightmost item of left     partition.

// 2. the rightmost item of left partition should always smaller than or equals to the leftmost item of right partition.

// [1,5,6]
// [2,3,4]

// end goal -> [1,2,3]
// We want to pick elements from both arrays, which can transform to the left parition of the sorted array. To acheive we will start get half numbers from the shorest array first and the remaing number of elements from the longest array (totalHalf - numberOfElments pick in first array)




var findMedianSortedArrays = function (nums1, nums2) {
  console.log(nums1)
  console.log(nums2)

  const nums1Size = nums1.length;
  const nums2Size = nums2.length;

  // eg: 8 => 4 , 7 => 3
  const half = Math.floor((nums1Size + nums2Size) / 2)

  let [short, long] = [nums1, nums2];
  if (nums1Size > nums2Size) {
    [short, long] = [long, short];
  }


  console.log(short, long)

  let [left, right] = [0, short.length - 1];
  // so that for the first try i always smaller than half

  while (true) {
    let i = Math.floor((left + right) / 2) // mid index of short
    let j = half - i - 2 // the rightmost index to pick in long

    let shortLeft = i >= 0 ? short[i] : Number.NEGATIVE_INFINITY // shortLeft is the middle of the array
    let shortRight = i + 1 < short.length ? short[i + 1] : Number.POSITIVE_INFINITY

    let longLeft = j >= 0 ? long[j] : Number.NEGATIVE_INFINITY
    let longRight = j + 1 < long.length ? long[j + 1] : Number.POSITIVE_INFINITY

    if (shortLeft <= longRight && longLeft <= shortRight) {
      if ((nums1Size + nums2Size) % 2) {
        // odd
        return Math.min(shortRight, longRight)
      } else {
        // even
        return (Math.max(shortLeft, longLeft) + Math.min(shortRight, longRight)) / 2
      }
    } else if (shortLeft > longRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};