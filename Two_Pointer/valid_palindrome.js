function isPalindrome(s) {
	// Remove non-alphanumeric characters and convert to lowercase
	s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	// Initialize pointers for the start and end of the string
	let left = 0;
	let right = s.length - 1;

	// Check characters from both ends moving towards the center
	while (left < right) {
		if (s[left] !== s[right]) {
			return false; // Characters do not match, not a palindrome
		}
		left++;
		right--;
	}

	return true; // All characters matched, it's a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
