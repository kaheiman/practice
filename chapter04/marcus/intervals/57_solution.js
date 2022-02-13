// be careful of res.push(newInterval);
// to handle intervals = [], newInterval = [2,5] => [[2,5]]
// to handle intervals = [], newInterval = [2,5] =>
// to handle intervals = [], newInterval = [2,5]

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  // if no overlap push to res
  // otherwise update new interval
  let res = [];
  for (i=0; i<intervals.length; i++) {
      // no overlapping
      if (newInterval[0] > intervals[i][1]) {
          res.push(intervals[i]);
      } else if (newInterval[1] < intervals[i][0]) {
          res.push(newInterval);
          return [...res, ...intervals.slice(i)];
      } else {
        // overlapping
          newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
      }
  }
  res.push(newInterval);
  return res;
};