const max_sub_array = (nums, size) => {
  let windowStart = 0;
  let globalMax = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i > size - 1) {
      // remove windowStart
      sum -= nums[windowStart];
      windowStart += 1;
    }
    if (i >= size - 1) {
      // update global sum
      if (sum > globalMax) {
        globalMax = sum;
      }
    }
  }

  return globalMax;
}

// [2, 1, 5, 1, 3, 2], (k = 3);
console.log("max sub array: ", max_sub_array([2, 3, 4, 1, 5], 2));


// smallest length with sum greater than s
const min_size_subarray_sum_greater_than_s = (s, nums) => {
  let windowStart = 0;
  let windowEnd = 0;
  let size = nums.length;
  let globalMin = size;
  let localSum = 0;

  for (windowEnd; windowEnd < size; windowEnd++) {
		localSum += nums[windowEnd];
		if (localSum >= s) {
			let d = windowEnd - windowStart + 1;
			if (d < globalMin) globalMin = d;
			while (localSum >= s) {
				localSum -= nums[windowStart];
				windowStart += 1;
				if (localSum > s && windowEnd - windowStart + 1 < globalMin) {
					globalMin = windowEnd - windowStart + 1;
				}
			}
		}
	}
  return globalMin;
	// keep expand the arr until greater than s
	// update global minumum
	// keep shrinking the arr until smaller than s
	// update global minumum
  // iterate if s is smaller than nums || windowEnd = size - 1
}

console.log(
	"smallest length arr: ",
	min_size_subarray_sum_greater_than_s(8, [3, 4, 1, 1, 9])
);


const non_repeat_substring = function (str) {
	// hashmap to rmb the visited charcter with its location
  let visitedMap = new Map();
  let windowStart = 0;
  let windowEnd = 0;
  let size = str.length;
  let globalMax = -1;
  for (windowEnd; windowEnd < size; windowEnd++) {
    let char = str[windowEnd];
    if (visitedMap.has(char)) {
      if (windowStart > visitedMap.get(char)) {
        visitedMap.set(char, windowEnd);
      } else {
        visitedMap.set(char, windowEnd);
        windowStart = windowEnd;
      }
    } else {
      visitedMap.set(char, windowEnd);
      if (windowEnd - windowStart + 1 > globalMax) {
        globalMax = windowEnd - windowStart + 1;
      }
    }
  }
		// update global max if (windowEnd - windowStart + 1 > global)

		// update hashtable when character repeated (also check windowStart is larger than location)
		return globalMax;
};

console.log("non repeated characters string: ", non_repeat_substring("abccde"));

const find_repeated_substring = (str) => {
    if (k > s.length) return new Set(); // If k is longer than the string length, return empty set

		const seen = new Map(); // Map to store substrings and their frequencies
		const repeated = new Set(); // Set to store the result (substrings occurring more than once)

		// Slide over the string to extract substrings of length k
		for (let i = 0; i <= s.length - k; i++) {
			const substring = s.substring(i, i + k);
			if (seen.has(substring)) {
				seen.set(substring, seen.get(substring) + 1);
			} else {
				seen.set(substring, 1);
			}

			// If a substring appears more than once, add it to the result set
			if (seen.get(substring) === 2) {
				repeated.add(substring);
			}
		}

		return repeated;

}

// Example usage:
const s = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
const k = 4;
const result = find_repeated_substring(s, k);
console.log([...result]);  // Output might include "GCAT", "CATG", etc., depending on the input string


function min_size_of_window_contains_substring(s, t) {
    if (s.length === 0 || t.length === 0 || s.length < t.length) {
        return "";
    }

    const tFreq = {}; // Frequency map for T
    for (let char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let required = Object.keys(tFreq).length; // Total unique characters in T that need to be present in the window
    let formed = 0; // To check how many unique characters in t are currently in the current window in S
    let l = 0; // Left pointer of the sliding window
    let r = 0; // Right pointer of the sliding window

    const windowCounts = {}; // A map to keep count of all unique characters in the current window
    let ans = [Infinity, 0, 0]; // Array for storing the smallest window (length, left, right)

    while (r < s.length) {
        const character = s[r];
        windowCounts[character] = (windowCounts[character] || 0) + 1;

        // Check if the current character added leads to a match of part of T
        if (tFreq[character] && windowCounts[character] === tFreq[character]) {
            formed++;
        }

        // Try and contract the window till the point it ceases to be 'desirable'
        while (l <= r && formed === required) {
            character = s[l];

            // Save the smallest window until now
            if (r - l + 1 < ans[0]) {
                ans = [r - l + 1, l, r];
            }

            // The character at the position pointed by `l` is no longer a part of the window
            windowCounts[character]--;
            if (tFreq[character] && windowCounts[character] < tFreq[character]) {
                formed--;
            }

            l++; // Move the left pointer ahead, this would help to look for a new window
        }

        r++; // Keep expanding the window once we are done contracting
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
}

// Example usage:
const S = "ADOBECODEBANC";
const T = "ABC";
console.log(min_size_of_window_contains_substring(S, T)); // Output: "BANC"


function minWindowSubsequence(S, T) {
    let sLen = S.length, tLen = T.length;
    let start = 0, minLen = Infinity;
    let subStart = 0;

    while (start < sLen) {
        let tIndex = 0;
        // Try to find the subsequence in S that matches T
        for (let sIndex = start; sIndex < sLen; sIndex++) {
            if (S[sIndex] === T[tIndex]) {
                tIndex++;
                if (tIndex >= tLen) {  // When all characters in T are matched
                    // Try to compress the window
                    let end = sIndex;
                    while (tIndex > 0) {
                        if (S[sIndex] === T[tIndex - 1]) {
                            tIndex--;
                        }
                        sIndex--;
                    }
                    sIndex++;  // Move right to the start of the subsequence
                    if (end - sIndex + 1 < minLen) {
                        minLen = end - sIndex + 1;
                        subStart = sIndex;
                    }
                    break;
                }
            }
        }
        start++;  // Move start right for the next potential start point in S
    }

    return minLen === Infinity ? "" : S.substr(subStart, minLen);
}

// Example usage
const SS = "abcdebdde";
const TT = "bde";
console.log(minWindowSubsequence(SS, TT));  // Output should be "bcde"

