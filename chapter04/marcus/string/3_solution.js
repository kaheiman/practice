// Time complexity : O(n)

// Space complexity (HashMap) : O(m).
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
	let left = 0;
	let map = {};
	return s.split("").reduce((max, v, i) => {
		left = map[v] >= left ? map[v] + 1 : left;
		map[v] = i;
		return Math.max(i - left + 1, max);
	}, 0);
};
