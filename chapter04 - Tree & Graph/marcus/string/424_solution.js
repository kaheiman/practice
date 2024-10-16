// sliding window
// Space complexity - O(N)
// Time complexity - O(N)
// Thinking process
// Step 1: Repeated character usually sliding window
// Step 2: Sliding window start with window size 0
// Step 3: Create char counter to record down the max count of chars
// Step 4: The max size of sliding window = SlidingWindowEnd - SlidingWindowStart + 1 > k + MaxCharsCount
// Step 5: Sliding window size can varies, so need another variable to record down the max window size

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let slidingWindowStart = 0;
	let maxLength = 0;
	let maxCharCount = 0;
	let charCounter = {};
	for (slidingWindowEnd = 0; slidingWindowEnd < s.length; slidingWindowEnd++) {
		if (charCounter[s[slidingWindowEnd]]) {
			charCounter[s[slidingWindowEnd]]++;
		} else {
			charCounter[s[slidingWindowEnd]] = 1;
		}

		let currCharCount = charCounter[s[slidingWindowEnd]];
		maxCharCount = Math.max(currCharCount, maxCharCount);

		if (slidingWindowEnd - slidingWindowStart + 1 - maxCharCount > k) {
			charCounter[s[slidingWindowStart]]--;
			slidingWindowStart++;
		}

		maxLength = Math.max(maxLength, slidingWindowEnd - slidingWindowStart + 1);
	}
	return maxLength;
};
