/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	let singleChar = s.length;
	let count = 0;

	for (i = 0; i < s.length; i++) {
		// odd
		let left = i - 1;
		let right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}

		// even
		left = i;
		right = i + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}
	}

	return count + singleChar;
};
