function validPalindrome(s) {
	function isPalindrome(str, left, right) {
		while (left < right) {
			if (str[left] !== str[right]) {
				return false;
			}
			left++;
			right--;
		}
		return true;
	}

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			// Try skipping either the left or the right character
			return (
				isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
			);
		}
		left++;
		right--;
	}

	return true;
}

// Example usage
console.log(validPalindrome("abca")); // Output: true
console.log(validPalindrome("racecar")); // Output: true
console.log(validPalindrome("abc")); // Output: false
console.log(validPalindrome("abccdba")); // Output: true
