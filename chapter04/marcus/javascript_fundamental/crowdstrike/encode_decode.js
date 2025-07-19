// Slice is start index to end Index, but the endIndex item is not counted in

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

 // 5#Hello5#World
 var encode = function(strs) {
    return strs.map((str) => `${str.length}#${str}`).join("")
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    console.log(s)
    const res = []
    let i = 0;
    while (i < s.length) {
        // 5#Hello5#World
        // Find the #
        let j = i
        while (s[j] !== '#') j++
        let numberOfWords = parseInt(s.slice(i, j), 10)
        let word = s.slice(j + 1, j + numberOfWords + 1)
        res.push(word)
        i = j + numberOfWords + 1
    }
    return res
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */