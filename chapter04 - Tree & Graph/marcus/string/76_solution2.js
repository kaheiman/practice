/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	//
	// How to scale up and down the window
	// --> scale up only if condition is not fulfilled
	// --> scale down only if condition is fufilled
	//.--> update the result and length of result when condition is fulfilled and result length is small than the current result length.
	// What is the condition
	// --> create hash map store key and value of t, where key is the char, and value is the number of occurance of that char.Compare a current charCounter with the condition counter
	// Compare the sliding window with the shortest length

	// be careful cannot compare two objects directly, json.stringnigy need to consider order of object as well
	// so use objects.key and need and have
	// be careful have-- need to check whether currCondition[s[start]] < condition[s[start]]

	if (t.length > s.length) return "";
	if (t.length === 0) return s[0];

	let start = 0;
	let condition = {};
	let currCondition = {};
	let result = [-1, -1];
	let smallestLength = -1;

	for (i = 0; i < t.length; i++) {
		if (condition[t[i]]) {
			condition[t[i]]++;
		} else {
			condition[t[i]] = 1;
		}
	}

	let need = Object.keys(condition).length;
	let have = 0;

	for (end = 0; end < s.length; end++) {
		let char = s[end];

		if (condition[char]) {
			if (currCondition[char] !== undefined) {
				currCondition[char]++;
			} else {
				currCondition[char] = 1;
			}
			if (condition[char] === currCondition[char]) {
				have++;
			}
		}
		// cannot compare two objects directly, json.stringnigy need to consider order of object as well
		while (have === need) {
			if (smallestLength === -1 || smallestLength > end - start + 1) {
				smallestLength = end - start + 1;
				result = [start, end];
			}
			if (condition[s[start]]) {
				currCondition[s[start]]--;
				if (currCondition[s[start]] < condition[s[start]]) {
					have--;
				}
			}
			start++;
		}
	}
	if (smallestLength === -1) return "";
	return s.slice(result[0], result[1] + 1);
};
