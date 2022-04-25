/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	// loop forward
	let result = "";
	let open = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			open++;
		} else if (s[i] === ")") {
			if (open === 0) continue;
			open--;
		}
		result += s[i];
	}
	// loop backward
	let reverseResult = "";
	for (let j = result.length - 1; j >= 0; j--) {
		if (result[j] === "(" && open-- > 0) {
			continue;
		}
		reverseResult += result[j];
	}
	return reverseResult.split("").reverse().join("");
};
