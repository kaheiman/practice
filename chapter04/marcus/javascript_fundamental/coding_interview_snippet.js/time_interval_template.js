class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`);
	}
}

function merge(intervals) {
  let mergedIntervals = [];
  if (intervals.length < 2) {
		return intervals;
	}
  intervals.sort((a,b) => a.start - b.start)
  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];
    if (mergedIntervals.length === 0) {
      mergedIntervals.push(cur);
    } else {
      let old = mergedIntervals.pop();
      if (cur.start <= old.end) {
        old.end = Math.max(cur.end, old.end);
        mergedIntervals.push(old);
      } else {
        mergedIntervals.push(old);
        mergedIntervals.push(cur);
      }
    }
  }
	return mergedIntervals;
}

process.stdout.write("Merged intervals: ");
let result = merge([
	new Interval(1, 4),
	new Interval(2, 5),
	new Interval(7, 9),
]);
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
	result[i].print_interval();
}
console.log();
