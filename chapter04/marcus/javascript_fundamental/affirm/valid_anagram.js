// Problem Title: Find All Substrings Containing All Characters

// Given s = "cbaebabdacd" and t = "abc"x => [0], "cba" and "bdac" is not counted


/**
 * Time Complexity:
O(n + m), where n is the length of s and m is the length of t. Each character in s and t is processed once.
Space Complexity:
O(m), where m is the number of unique characters in t. We store the frequency maps for both t and the current window.
 */


class Anagram {
  constructor(s, t) {
    this.s = s
    this.t = t
    this.anagramFreqCountMap = this.generateFreqCountMap(t)
    this.uniqueLetterSize = this.getUniqueLetter(t)
    this.currentWindowFreqCountMap = new Map()
    this.formed = 0
  }

  generateFreqCountMap(t) {
    const map = new Map()
    for (let i = 0; i < t.length; i++) {
      map.set(t[i], (map.get(t[i]) || 0) + 1);
    }
    return map
  }

  getUniqueLetter(t) {
    return new Set(t.split('')).size
  }

  getAnagramIndexList() {
    let result = [];
    let right = 0
    let left = 0
    while(right < this.s.length) {
      let char = this.s[right]
      this.currentWindowFreqCountMap.set(char, ((this.currentWindowFreqCountMap.get(char) || 0) + 1))

      if (this.anagramFreqCountMap.has(char) && this.currentWindowFreqCountMap.get(char) === this.anagramFreqCountMap.get(char)) {
        this.formed += 1
      }

      while (left <= right && this.formed === this.uniqueLetterSize) {
        const toRemovChar = this.s[left]
        if (right - left + 1  === this.t.length) {
          result.push(left)
        }

        this.currentWindowFreqCountMap.set(
					toRemovChar,
					this.currentWindowFreqCountMap.get(toRemovChar) - 1
				);

        if (
          this.anagramFreqCountMap.has(toRemovChar) &&
          this.currentWindowFreqCountMap.get(toRemovChar) <
            this.anagramFreqCountMap.get(toRemovChar)
        ) {
          this.formed -= 1;
        }

        left++
      }

      right++
    }
    return result
  }


}

function findAnagrams(s, t) {
	let result = [];

	if (t.length > s.length) return result; // If `t` is longer than `s`, return an empty result

	const tFreqMap = {}; // Frequency map for characters in `t`
	for (let char of t) {
		tFreqMap[char] = (tFreqMap[char] || 0) + 1;
	}

	let requiredCharCount = Object.keys(tFreqMap).length; // Number of distinct characters in `t`
	let left = 0; // Left side of our sliding window
	let right = 0; // Right side of our sliding window
	let windowFreqMap = {}; // Frequency map for current window
	let formed = 0; // Number of distinct characters that meet the required frequency

	// Start sliding window
	while (right < s.length) {
		let char = s[right]; // Current character at the right of the window
		windowFreqMap[char] = (windowFreqMap[char] || 0) + 1;

		// Check if current character has met the frequency requirement
		if (tFreqMap[char] && windowFreqMap[char] === tFreqMap[char]) {
			formed++;
		}

		// Try to contract the window from the left if we have a valid window
		while (left <= right && formed === requiredCharCount) {
			char = s[left];

			// If the window size matches the size of `t`, store the starting index
			if (right - left + 1 === t.length) {
				result.push(left);
			}

			// Remove character at left from the window
			windowFreqMap[char]--;
			if (tFreqMap[char] && windowFreqMap[char] < tFreqMap[char]) {
				formed--;
			}

			// Move left pointer forward
			left++;
		}

		// Move right pointer forward
		right++;
	}

	return result;
}

// Example usage:
const s = "cbaebabdacd";
const t = "abc";
console.log(findAnagrams(s, t)); // Output: [0, 6]

const a = new Anagram(s, t);
console.log('getAnagramIndexList: ', a.getAnagramIndexList());
