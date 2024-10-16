/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let org = JSON.parse(JSON.stringify(strs));
	if (strs.length === 1) return [strs];
	let map = {};
	let result = [];
	let count = 0;
	// 'a'.charCodeAt(0) - 97 = 0
	for (i = 0; i < strs.length; i++) {
		strs[i] = strs[i].split("").sort().join("");
		if (map[strs[i]] === undefined) {
			map[strs[i]] = count;
			count++;
		}
		let key = map[strs[i]];
		if (result[key] !== undefined) {
			result[key].push(org[i]);
		} else {
			result[key] = [org[i]];
		}
	}
	return result;
};
