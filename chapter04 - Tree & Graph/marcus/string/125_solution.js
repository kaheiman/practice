/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const reg = new RegExp(/[^a-zA-Z0-9]/);
	let ss = s.split(reg).join("").toLowerCase();
	console.log(ss);
	let ssLength = ss.length;
	if (ssLength <= 1) return true;
	let startPointer = 0;
	let endPointer = ssLength - 1;
	while (startPointer < endPointer) {
		if (ss[startPointer] !== ss[endPointer]) return false;
		startPointer++;
		endPointer--;
	}
	return true;
};
