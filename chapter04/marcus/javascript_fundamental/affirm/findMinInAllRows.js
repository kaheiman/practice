// Timecomplexity is n * m
const findMinimumInAllRows = (m) => {
  if (m.length === 0) return -1
  let common = new Set(m[0])

  for (let i = 1; i < m.length - 1; i++) {
    common = new Set(m[i].filter((item) => common.has(item)));
  }

  if (common.size > 0) {
    return Math.min(...common)
  } else {
    return -1
  }
}

// Example usage
const matrix = [
	[1, 2, 3],
	[2, 5],
	[2, 4, 6, 2],
];
console.log(findMinimumInAllRows(matrix)); // Output: 2
