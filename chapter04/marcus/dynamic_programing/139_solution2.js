// Time complexity = O(N ^ M) N is the length of word list and M is the length of the word
// Space complexity = O(M)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  result = false;
  const dfs = (subS) => {
      if (subS.length === 0) result = true
      for (let word of wordDict) {
          if (subS.slice(0, word.length) === word) {
              dfs(subS.slice(word.length));
          }
      }
  }
  dfs(s)
  return result;
};