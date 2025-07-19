// Rmb Math.max(merged[merged.length - 1][1], interval[1]), there is chance next endDate is smaller than the last endDate

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // how to detect no overlapping, when last ending time is smaller than the current startTime
 
    // sort the intervals first to make sure we are processing in a right order, earlier start time will go first
 
     const merged = []
    intervals.sort((a, b) => {
         return a[0] - b[0]
    })
    for (let interval of intervals) {
         if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
             merged.push(interval)
         } else {
             merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
         }
    }
    return merged
 };