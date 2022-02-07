/**
 * @param {string} s
 * @return {number}
 */

// Thinking process when the window size will change
// 1. have repeated character : map[currChar] >= 0
// 2. the repeated currChar is larger than slidingWindowStart 'abba' <- to tackle this case

var lengthOfLongestSubstring = function (s) {
	let slidingWindowStart = 0;
	let map = {};
	let maxLength = 0;
	for (slidingWindowEnd = 0; slidingWindowEnd < s.length; slidingWindowEnd++) {
		let currChar = s[slidingWindowEnd];
		if (map[currChar] >= 0 && map[currChar] >= slidingWindowStart) {
			slidingWindowStart = map[currChar] + 1;
		}
		map[currChar] = slidingWindowEnd;
		maxLength = Math.max(slidingWindowEnd - slidingWindowStart + 1, maxLength);
	}
	return maxLength;
};
