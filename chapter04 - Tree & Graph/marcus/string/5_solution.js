// Time complexity O(n^2)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	// staring from the middle
	let resLength = 0;
	let res = [];
	if (s.length === 1) return s;

	for (i = 0; i < s.length; i++) {
		// odd
		let left = i - 1;
		let right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			if (right - left + 1 > resLength) {
				resLength = right - left + 1;
				res = [left, right];
			}
			left--;
			right++;
		}

		// even
		left = i;
		right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			if (right - left + 1 > resLength) {
				resLength = right - left + 1;
				res = [left, right];
			}
			left--;
			right++;
		}
	}

	if (res.length === 0) return s[0];
	return s.slice(res[0], res[1] + 1);
};
