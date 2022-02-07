/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	// Two conditions to return false
	// 1. - when the length of stack is larger than 0
	// 2. - when the pop element is not equal to char
	let stack = [];
	for (let char of s) {
		switch (char) {
			case "{":
				stack.push("}");
				break;
			case "(":
				stack.push(")");
				break;
			case "[":
				stack.push("]");
				break;
			default:
				if (stack.pop() !== char) {
					return false;
				}
		}
	}
	if (stack.length !== 0) return false;
	return true;
};
