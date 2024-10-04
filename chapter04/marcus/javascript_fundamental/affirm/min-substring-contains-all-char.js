function minWindowSubstring(s, t) {
	let result = ""; // To store the minimum window substring
	if (t.length > s.length) return result; // If `t` is longer than `s`, return an empty result

	const tFreqMap = {}; // Frequency map for characters in `t`
	for (let char of t) {
		tFreqMap[char] = (tFreqMap[char] || 0) + 1;
	}

	let requiredCharCount = Object.keys(tFreqMap).length; // Number of distinct characters in `t`
	let left = 0; // Left side of our sliding window
	let right = 0; // Right side of our sliding window
	let windowFreqMap = {}; // Frequency map for the current window
	let formed = 0; // Number of distinct characters that meet the required frequency
	let minLength = Infinity; // To track the minimum window length
	let minWindowStart = 0; // To track the starting index of the minimum window

	// Start sliding window
	while (right < s.length) {
		let char = s[right]; // Current character at the right of the window
		windowFreqMap[char] = (windowFreqMap[char] || 0) + 1;

		// Check if the current character has met the frequency requirement in `t`
		if (tFreqMap[char] && windowFreqMap[char] === tFreqMap[char]) {
			formed++;
		}

		// Try to contract the window from the left if we have a valid window
		while (left <= right && formed === requiredCharCount) {
			let currentWindowSize = right - left + 1;

			// Update the minimum window if the current one is smaller
			if (currentWindowSize < minLength) {
				minLength = currentWindowSize;
				minWindowStart = left;
			}

			// Try to contract the window by moving the left pointer
			let leftChar = s[left];
			windowFreqMap[leftChar]--;

			// If we lose a required character from the window, reduce the `formed` count
			if (tFreqMap[leftChar] && windowFreqMap[leftChar] < tFreqMap[leftChar]) {
				formed--;
			}

			left++;
		}

		// Move the right pointer forward
		right++;
	}

	// If we found a valid window, return the substring, otherwise return an empty string
	return minLength === Infinity
		? ""
		: s.substring(minWindowStart, minWindowStart + minLength);
}

// Example usage:
const s = "ceeeebaebabdacd";
const t = "abc";
console.log(minWindowSubstring(s, t)); // Output: "bacd"
