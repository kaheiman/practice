// time complexity O(M*N)
// space complexity = O(M*N)
// be careful special cases
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let leftPointer = 0;
	let rightPointer = matrix[0].length;
	let topPointer = 0;
	let bottomPointer = matrix.length;
	let res = [];
	while (leftPointer < rightPointer && topPointer < bottomPointer) {
		// traverse from top-left to top-right
		for (col = leftPointer; col < rightPointer; col++) {
			res.push(matrix[topPointer][col]);
		}
		topPointer++;

		// traverse from top-right to bottom-right
		for (row = topPointer; row < bottomPointer; row++) {
			res.push(matrix[row][rightPointer - 1]);
		}
		rightPointer--;

		// to handle special cases tackle [[1,2,3][4,5,6]] , [[1,2,3]], [[1],[2],[3]], [[1,2],[3,4], [5,6]]
		if (!(leftPointer < rightPointer && topPointer < bottomPointer)) break;

		// traverse from bottom-right to bottom-left
		for (col = rightPointer - 1; col >= leftPointer; col--) {
			res.push(matrix[bottomPointer - 1][col]);
		}
		bottomPointer--;

		// traverse from bottom-left to top-left
		for (row = bottomPointer - 1; row >= topPointer; row--) {
			res.push(matrix[row][leftPointer]);
		}
		leftPointer++;
	}
	return res;
};
