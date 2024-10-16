/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	// To tackle with repeated charcter, the first thing l come up with sliding window
	// And how to scale up / down the window
	// --> window size <= k + max repeated word
	// --> when window shift need to control the repeated word
	// Compare the max size of window to current size of window

	if (s.length === 1) return 1;
	let start = 0;
	let maxLength = 0;
	let charCounter = {};
	let maxCharCounter = 0;
	for (end = 0; end < s.length; end++) {
		if (charCounter[s[end]]) {
			charCounter[s[end]]++;
		} else {
			charCounter[s[end]] = 1;
		}
		maxCharCounter = Math.max(maxCharCounter, charCounter[s[end]]);
		while (end - start + 1 > k + maxCharCounter) {
			charCounter[s[start]]--;
			start++;
		}
		maxLength = Math.max(maxLength, end - start + 1);
	}
	return maxLength;
};
