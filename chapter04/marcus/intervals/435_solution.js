// Time complexity O(nlog(n)) -> sorting algo is nlogn
// Space complexity O(1)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // need to know how to do sorting 2d array
  // [[1,2],[2,3],[3,4],[1,3]] -> [[1,2],[2,3],[1,3], [3,4]] sort by last element
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let remove = 0;
  for (i = 1; i < intervals.length; i++) {
    // if new start is smaller than prev end -> collision
    if (intervals[i][0] < prev[1]) {
      remove++;
    } else {
      prev = intervals[i];
    }
  }
  return remove
};